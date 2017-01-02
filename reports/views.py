from django.shortcuts import render
from django.http import HttpResponse
from settings.models import District, Province
from incidents.models import IncidentReport
import yaml
from django.apps import apps
from django.conf import settings
import json
from django.views.decorators.csrf import csrf_protect, csrf_exempt
from users.decorators import super_user_permission


@super_user_permission()
def index_report(request):   
    return render(request, 'reports/index_report.html')


@super_user_permission()
def index_chart(request):   
    return render(request, 'reports/index_chart.html')


def health_summery_damageloss_dis_report(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents
    }
    return render(request, 'reports/health_summery_damageloss_dis_report.html', context)


def health_summery_damageloss_national_report(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    provinces = Province.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'provinces': provinces
    }
    return render(request, 'reports/health_summery_damageloss_national_report.html', context)


def health_summery_damageloss_province_report(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    provinces = Province.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'provinces': provinces
    }
    return render(request, 'reports/health_summery_damageloss_province_report.html', context)


@csrf_exempt
def dl_fetch_report_data(request):

    data = (yaml.safe_load(request.body))
    table_name = data['table_name']
    com_data = data['com_data']
    incident = com_data['incident']
    tables = settings.TABLE_PROPERTY_MAPPER[table_name]

    bs_mtable_data = {table_name: {}}
    filter_fields = {}

    if table_name == 'Table_9':
        admin_area = com_data['province']
        filter_fields = {'incident': incident, 'province': admin_area}
    elif table_name == 'Table_10':
        filter_fields = {'incident': incident}
    else:
        admin_area = com_data['district']
        filter_fields = {'incident': incident, 'district': admin_area}

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
