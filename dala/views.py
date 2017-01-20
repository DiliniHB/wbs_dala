from __future__ import absolute_import
from django.shortcuts import render
from django.http import HttpResponse
import json
from django.core.serializers.json import DjangoJSONEncoder
import yaml
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from django.apps import apps
import datetime
from django.utils import timezone
from health.base_line.models import BdSessionKeys
from health.damage_losses.models import DlSessionKeys
from incidents.models import IncidentReport

from settings.models import District, Province
from django.core import serializers
from django.conf import settings


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


@csrf_exempt
def bs_save_data(request):
    bs_data = (yaml.safe_load(request.body))
    bs_table_hs_data = bs_data['table_data']
    com_data = bs_data['com_data']
    district = com_data['district']
    bs_date = com_data['bs_date']
    todate = timezone.now()
    is_edit = bs_data['is_edit']

    if not is_edit:
        for sector in bs_table_hs_data:
            for interface_table in bs_table_hs_data[sector]:
                print 'interface table', ' -->', interface_table, '\n'

                record_exist = BdSessionKeys.objects.filter(bs_date=com_data['bs_date'],
                                                            table_name=interface_table,
                                                            district=district)

                if not record_exist:

                    for db_table in bs_table_hs_data[sector][interface_table]:

                        print 'db table', ' -->', db_table, '\n'

                        for row in bs_table_hs_data[sector][interface_table][db_table]:

                            model_class = apps.get_model('base_line', db_table)
                            model_object = model_class()

                            # assigning common properties to model object
                            model_object.created_date = todate
                            model_object.lmd = todate
                            model_object.district_id = district
                            model_object.bs_date = bs_date

                            print 'row', ' --> ', row, '\n', ' object '

                            for property in row:
                                setattr(model_object, property, row[property])

                                print 'property ', ' --> ', property, ' db_property ', row[property], ' index ', '\n'
                                model_object.save()

                                # get bs full date
                    split_date = bs_date.split('/')
                    bs_month = split_date[0]
                    bs_year = split_date[1]
                    bs_full_date = datetime.date(int(bs_year), int(bs_month), 1)

                    bd_session = BdSessionKeys(bs_date=com_data['bs_date'], table_name=interface_table,
                                               date=todate, district_id=district, data_type='base_line',
                                               full_bs_date=bs_full_date)
                    bd_session.save()

                    return HttpResponse(True)

                else:
                    return HttpResponse(False)

    else:
        bs_save_edit_data(bs_table_hs_data, com_data)

    return HttpResponse('success')


@csrf_exempt
def bs_get_data(request):
    todate = timezone.now()
    data = (yaml.safe_load(request.body))
    com_data = data['com_data']
    district = com_data['district']
    incident_id = com_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    incident_date = incident.reported_date_time
    db_tables = data['db_tables']

    # get closest data based on district incident date and table number
    bs_session = BdSessionKeys.objects.values('bs_date').latest('date')
    bs_date = bs_session['bs_date']

    bs_mtable_data = {}

    for db_table in db_tables:
        model_class = apps.get_model('base_line', db_table)
        bs_mtable_data[db_table] = serializers.serialize('json',
                                                         model_class.objects.filter(bs_date=bs_date).order_by('id'))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_get_data_mock(request):
    todate = timezone.now()
    data = (yaml.safe_load(request.body))
    com_data = data['com_data']
    district = com_data['district']
    incident_id = com_data['incident']
    incident = IncidentReport.objects.get(pk=incident_id)
    incident_date = incident.reported_date_time
    table_name = data['table_name']
    db_tables = data['db_tables']
    bs_mtable_data = {}

    bd_sessions = BdSessionKeys.objects.extra(select={'difference': 'full_bs_date - %s'},
                                                  select_params=(incident_date,)).\
        filter(table_name=table_name, district=district).\
        values('difference', 'id', 'bs_date').order_by('difference').latest('difference')

    print bd_sessions
    bs_date = bd_sessions['bs_date']

    for db_table in db_tables:
        model_class = apps.get_model('base_line', db_table)
        # assuming there could be multiple data sets for bs_date
        bs_mtable_data[db_table] = serializers.serialize('json',
                                                         model_class.objects.filter(bs_date=bs_date, district=district).order_by('id'))

    return HttpResponse(
        json.dumps((bs_mtable_data)),

        content_type='application/javascript; charset=utf8'
    )



@csrf_exempt
def bs_fetch_edit_data(request):
    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    bs_date = com_data['bs_date']
    district = com_data['district']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    bs_mtable_data = {sector: {}}
    bs_mtable_data[sector][table_name] = {}

    for table in tables:
        table_fields = tables[table]

        model_class = apps.get_model('base_line', table)
        bs_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                 filter(bs_date=bs_date, district=district).
                                                 values(*table_fields).order_by('id'))

    return HttpResponse(
        json.dumps(bs_mtable_data),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def bs_save_edit_data(table_data, com_data):
    district = com_data['district']
    bs_date = com_data['bs_date']

    for sector in table_data:
        for interface_table in table_data[sector]:
            print 'interface table', ' -->', interface_table, '\n'
            for db_table in table_data[sector][interface_table]:

                print 'db table', ' -->', db_table, '\n'

                for row in table_data[sector][interface_table][db_table]:
                    model_class = apps.get_model('base_line', db_table)
                    model_object = model_class.objects.filter(bs_date=bs_date, district=district, id=row['id'])
                    model_object.update(**row)

                    print 'row', ' --> ', row, ' id ', model_object[0].id, '\n'



@csrf_exempt
def dl_save_data(request):
    dl_data = (yaml.safe_load(request.body))
    dl_table_data = dl_data['table_data']
    com_data = dl_data['com_data']
    todate = timezone.now()
    is_edit = dl_data['is_edit']

    filter_fields = {}

    if not is_edit:
        try:
            for sector in dl_table_data:
                for interface_table in dl_table_data[sector]:

                    incident = com_data['incident']
                    if 'province' in com_data:
                        admin_area = com_data['province']
                        filter_fields = {'table_name': interface_table, 'incident': incident, 'province': admin_area}
                    elif 'district' in com_data:
                        admin_area = com_data['district']
                        filter_fields = {'table_name': interface_table, 'incident': incident, 'district': admin_area}
                    else:
                        filter_fields = {'table_name': interface_table, 'incident': incident}

                    record_exist = DlSessionKeys.objects.filter(**filter_fields)

                    if not record_exist:

                        print 'interface table', ' -->', interface_table, '\n'
                        for db_table in dl_table_data[sector][interface_table]:

                            print 'db table', ' -->', db_table, '\n'

                            for row in dl_table_data[sector][interface_table][db_table]:

                                model_class = apps.get_model('damage_losses', db_table)
                                model_object = model_class()

                                # assigning common properties to model object
                                model_object.created_date = todate
                                model_object.lmd = todate
                                if 'province' in com_data:
                                    model_object.province_id = com_data['province']
                                elif 'district' in com_data:
                                    model_object.district_id = com_data['district']

                                model_object.incident_id = com_data['incident']

                                print 'row', ' --> ', row, '\n', ' object '

                                for property in row:
                                    setattr(model_object, property, row[property])

                                    print 'property ', ' --> ', property, ' db_property ', row[property], ' index ', '\n'
                                    model_object.save()

                        dl_session = DlSessionKeys(**filter_fields)
                        dl_session.date = todate
                        dl_session.save()

                        return HttpResponse(True)

                    else:
                        return HttpResponse(False)

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

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident_id, 'province': admin_area}
    elif 'district' in com_data:
        admin_area = com_data['district']
        filter_fields = {'incident': incident_id, 'district': admin_area}
    else:
        filter_fields = {'incident': incident_id}

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
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

    filter_fields = {}

    if 'province' in com_data:
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif 'district' in com_data:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}
    else:
        filter_fields = {'incident': incident}

    dl_mtable_data = {sector: {}}
    dl_mtable_data[sector][table_name] = {}

    for table in tables:
        table_fields = tables[table]
        model_class = apps.get_model('damage_losses', table)
        dl_mtable_data[sector][table_name][table] = list(model_class.objects.
                                                 filter(**filter_fields).
                                                 values(*table_fields).order_by('id'))

        print dl_mtable_data

    return HttpResponse(
        json.dumps(dl_mtable_data, cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_fetch_district_disagtn(request):

    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    sector = data['sector']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[sector][table_name]

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
            district_id = dl_session.district.id
            filter_fields = {'incident': incident, 'district': district_id}
            category_name = dl_session.district.name
        else:
            province_id = None
            if dl_session.province:
                province_id = dl_session.province.id
                category_name = dl_session.province.name
            filter_fields = {'incident': incident, 'province': province_id}

        if category_name is not None:
            dl_mtable_data[sector][table_name][category_name] = {}

            for table in tables:
                print table
                table_fields = tables[table]

                dl_mtable_data[sector][table_name][category_name][table] = {}

                table_fields = tables[table]
                model_class = apps.get_model('damage_losses', table)

                table_fields = tables[table]
                print table_fields
                dl_mtable_data[sector][table_name][category_name][table] = list(model_class.objects.
                                                                                filter(**filter_fields)
                                                                                .values(*table_fields))


    return HttpResponse(
        json.dumps((dl_mtable_data), cls=DjangoJSONEncoder),
        content_type='application/javascript; charset=utf8'
    )


@csrf_exempt
def dl_save_edit_data(table_data, com_data):

    for sector in table_data:
        for interface_table in table_data[sector]:
            print 'interface table', ' -->', interface_table, '\n'
            for db_table in table_data[sector][interface_table]:

                print 'db table', ' -->', db_table, '\n'

                for row in table_data[sector][interface_table][db_table]:
                    model_class = apps.get_model('damage_losses', db_table)
                    model_object = model_class.objects.filter(id=row['id'])
                    model_object.update(**row)

                    print 'row', ' --> ', row, ' id ', model_object[0].id, '\n'
