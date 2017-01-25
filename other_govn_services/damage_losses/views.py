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
    filter_fields = {'incident': incident, 'district': 1}

    for ownership in ownerships:
        ownership_name = ownership.name
        print ownership_name
        dl_mtable_data[sector][table_name][ownership_name] = {}

        for model in models:

            model_class = apps.get_model('damage_losses', model)
            model_fields = settings.TABLE_PROPERTY_MAPPER[sector][table_name][model]
            dmg_data = model_class.objects.values(*model_fields)
            dl_mtable_data[sector][table_name][ownership_name][model] = list(dmg_data)

    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )
