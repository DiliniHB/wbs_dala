from django.shortcuts import render
from dala.views import fetch_districts
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import yaml, json
from django.apps import apps
from django.core import serializers


def dl_govn_edu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/damage_loss_assessment_government_education_facilities_district.html', context)


def dl_pvt_edu_facilities(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/damage_loss_assessment_private_education_facility.html', context)


def dl_edu_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents

    }
    return render(request, 'damage_losses/summary_damages_losses_education_district.html', context)


@csrf_exempt
def fetch_schools(request):
    data = (yaml.safe_load(request.body))
    district_id = data['district']
    schools = data['schools']

    bs_schools = {}

    for school in schools:
        model_class = apps.get_model('base_line', school)
        model_array = model_class.objects.filter(district=district_id).values('name', 'id').order_by('id')

        bs_schools[school] = {}
        bs_schools[school] = model_array

    print bs_schools
    return HttpResponse(
        json.dumps(list(bs_schools)),
        content_type='application/javascript; charset=utf8'
    )
