from django.shortcuts import render
from settings.models import District, Province
from health.base_line.models import Ownership, Department
from incidents.models import IncidentReport
import yaml, json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.conf import settings
from health.damage_losses.models import DlSessionKeys
from django.apps import apps
from django.core.serializers.json import DjangoJSONEncoder
from health.base_line.models import Ownership
from health.damage_losses.models import DlagdDmgDistrict


# Table 2
def dl_assessment_of_govn_dep_or_ofc_in_a_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    ownerships = Ownership.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'ownerships': ownerships
    }
    return render(request, 'damage_losses/dl_assessment_of_government_departments_or_offices_in_a_district.html', context)


# Table 3
def dl_damage_loss_assessment_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/dl_damage_loss_assessment_district.html', context)


# Table 4
def dl_damage_loss_assessmen_province(request):
    provinces = Province.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'provinces': provinces,
        'incidents': incidents
    }
    return render(request, 'damage_losses/dl_damage_loss_assessmen_province.html', context)


# Table 5
def dl_assessmen_nationwide(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents
    }
    return render(request, 'damage_losses/dl_assessmen_nationwide.html', context)


@csrf_exempt
def fetch_ownership(request):
    data = (yaml.safe_load(request.body))
    department_id = data['department']

    department = Department.objects.get(pk=department_id)

    if department is not None:
        return HttpResponse(department.ownership.name)
    else:
        return HttpResponse(False)


@csrf_exempt
def dl_fetch_district_disagtn(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    ownerships = Ownership.objects.all()
    models = ['DlagdDmgDistrict', 'DlagdLossesDistrict']

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    filter_fields = {}

    category_name = None

    for ownership in ownerships:
        ownership_name = ownership.name
        print ownership_name
        dl_mtable_data[sector][table_name][ownership_name] = {}

        depmnt_filter_fields = {'incident': incident, 'district': 1, 'department__ownership': ownership.id}
        departments = DlagdDmgDistrict.objects.filter(**depmnt_filter_fields).values('department__ownership', 'department', 'department__name')

        for department in departments:
            department_id = department['department']
            department_name = department['department__name']
            department_ownership = department['department__ownership']

            print department_ownership
            filter_fields = {'incident': incident, 'district': 1, 'department': department_id}
            dl_mtable_data[sector][table_name][ownership_name][department_name] = {}
            for model in models:
                model_class = apps.get_model('damage_losses', model)
                model_fields = settings.TABLE_PROPERTY_MAPPER[sector][table_name][model]
                dmg_data = model_class.objects.filter(**filter_fields).values(*model_fields)
                dl_mtable_data[sector][table_name][ownership_name][department_name][model] = list(dmg_data)

    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_disagtn_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    ownerships = Ownership.objects.all()

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    filter_fields = {}

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'district__province': admin_area}
    else:
        filter_fields = {'incident': incident}

    dl_sessions = DlSessionKeys.objects.filter(**filter_fields)

    for dl_session in dl_sessions:

        category_name = None

        if 'province' in com_data:
            category_name = dl_session.district.name
        else:
             category_name = dl_session.province.name

        dl_mtable_data[sector][table_name][category_name] = {}

        for ownership in ownerships:

            ownership_name = ownership.name

            if 'province' in com_data:
                district_id = dl_session.district.id
                filter_fields = {'incident': incident, 'district': district_id, 'ownership': ownership.id}
                category_name = dl_session.district.name
            else:
                province_id = None
                if dl_session.province:
                    province_id = dl_session.province.id
                    category_name = dl_session.province.name
                filter_fields = {'incident': incident, 'province': province_id, 'ownership': ownership.id}

            dl_mtable_data[sector][table_name][category_name][ownership_name] = {}

            if category_name is not None:

                for table in tables:
                    table_fields = tables[table]
                    dl_mtable_data[sector][table_name][category_name][ownership_name][table] = {}

                    table_fields = tables[table]
                    model_class = apps.get_model('damage_losses', table)

                    table_fields = tables[table]

                    dl_mtable_data[sector][table_name][category_name][ownership_name][table] = list(model_class.objects.
                                                                                                    filter(**filter_fields)
                                                                                                    .values(*table_fields))
                    print dl_mtable_data[sector][table_name][category_name][ownership_name][table]


    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )
