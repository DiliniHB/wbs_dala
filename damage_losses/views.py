from django.shortcuts import render
from settings.models import District, Province
from incidents.models import IncidentReport
import yaml, json
from django.http import HttpResponse
from django.apps import apps
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.core import serializers
from django.conf import settings
from users.decorators import permission_required


def fetch_districts(user):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    if user.is_superuser:
        return {'districts': districts, 'incidents': incidents}
    else:
        role = user.user_role.code_name

        if role == 'district':
            district_id = user.district_id
            districts = District.objects.filter(id=district_id)
            incidents = IncidentReport.objects.filter(effectedarea__district=district_id)
        elif role == 'provincial':
            province = user.province
            districts = province.district_set.all()
            incidents = IncidentReport.objects.filter(effectedarea__district__province=province).distinct()
        incidents = IncidentReport.objects.all()
        return {'districts': districts, 'incidents': incidents}


@csrf_exempt
def fetch_incident_districts(request):
    dl_data = (yaml.safe_load(request.body))
    incident_id = dl_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    affected_district = incident.effectedarea_set.values('district__id', 'district__name').distinct()

    return HttpResponse(
        json.dumps(list(affected_district)),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def fetch_incident_provinces(request):
    dl_data = (yaml.safe_load(request.body))
    incident_id = dl_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    affected_provinces = incident.effectedarea_set.values('district__id', 'district__province_id', 'district__province__name').distinct()

    return HttpResponse(
        json.dumps(list(affected_provinces)),
        content_type='application/javascript; charset=utf8'
    )


@permission_required("district")
def dl_health_damagelost_other_medical_facilities(request):
    fetch_data = fetch_districts(request.user)
    districts = fetch_data['districts']
    incidents = IncidentReport.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'damage_losses/health_damagelost_other_medi.html', context)


#dileepa
@permission_required("district")
def health_damagelost_ministry_helth(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents
    }
    return render(request, 'damage_losses/health_damagelost_ministry_helth.html', context)


@permission_required("district")
def health_damagelost_private(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/health_damagelost_private.html', context)


@permission_required("provincial")
def health_summery_damageloss_province(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/health_summery_damageloss_province.html', context)


def dl_health_summary_sector_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/health_summery_damageloss_dis.html', context)


@permission_required("national")
def dl_health_summary_damage_nationwide(request):
    districts = District.objects.all()
    fetch_data = fetch_districts(request.user)
    incidents = fetch_data['incidents']
    context = {
        'districts': districts,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/health_summery_damageloss_national.html', context)



@csrf_exempt
def dl_save_data(request):
    dl_data = (yaml.safe_load(request.body))
    dl_table_data = dl_data['table_data']
    com_data = dl_data['com_data']
    todate = timezone.now()
    is_edit = dl_data['is_edit']

    if not is_edit:
        try:
            for interface_table in dl_table_data:
                print 'interface table', ' -->', interface_table, '\n'
                for db_table in dl_table_data[interface_table]:

                    print 'db table', ' -->', db_table, '\n'

                    for row in dl_table_data[interface_table][db_table]:

                        model_class = apps.get_model('damage_losses', db_table)
                        model_object = model_class()

                        # assigning common properties to model object
                        model_object.created_date = todate
                        model_object.lmd = todate
                        if interface_table == 'Table_9':
                            model_object.province_id = com_data['province']
                        elif interface_table == 'Table_10':
                            print 'Table 10'
                        else:
                            model_object.district_id = com_data['district']
                        model_object.incident_id = com_data['incident']

                        print 'row', ' --> ', row, '\n', ' object '

                        for property in row:
                            setattr(model_object, property, row[property])

                            print 'property ', ' --> ', property, ' db_property ', row[property], ' index ', '\n'
                            model_object.save()

        except Exception as e:
            return HttpResponse(e)

    else:
        dl_save_edit_data(dl_table_data, com_data)

    return HttpResponse('success')


@csrf_exempt
def dl_get_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident_id = com_data['incident']
    db_tables = data['db_tables']

    dl_mtable_data = {}
    filter_fields = {}

    if table_name == 'Table_9':
        admin_area = com_data['province']
        filter_fields = {'incident': incident_id, 'province': admin_area}
    elif table_name == 'Table_10':
        filter_fields = {'incident': incident_id}
    else:
        admin_area = com_data['district']
        filter_fields = {'incident': incident_id, 'district': admin_area}

    for db_table in db_tables:
        model_class = apps.get_model('damage_losses', db_table)
        #dl_mtable_data[db_table] = serializers.serialize('json', model_class.objects.filter(incident=incident_id, district=district).order_by('id'))
        dl_mtable_data[db_table] = serializers.serialize('json', model_class.objects.filter(**filter_fields).order_by('id'))

    return HttpResponse(
        json.dumps(dl_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_edit_data(request):

    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[table_name]

    filter_fields = {}

    if table_name == 'Table_9':
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif table_name == 'Table_10':
        filter_fields = {'incident': incident}
    else:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}

    bs_mtable_data = {table_name: {}}

    for table in tables:
        table_fields = tables[table]
        model_class = apps.get_model('damage_losses', table)
        bs_mtable_data[table_name][table] = list(model_class.objects.
                                                 filter(**filter_fields).
                                                 values(*table_fields))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_save_edit_data(table_data, com_data):

    #incident = com_data['incident']
    #district = com_data['district']

    for interface_table in table_data:
        print 'interface table', ' -->', interface_table, '\n'
        for db_table in table_data[interface_table]:

            print 'db table', ' -->', db_table, '\n'

            for row in table_data[interface_table][db_table]:

                model_class = apps.get_model('damage_losses', db_table)
                model_object = model_class.objects.filter(id=row['id'])
                model_object.update(**row)

                print 'row', ' --> ', row, ' id ', model_object[0].id, '\n'
