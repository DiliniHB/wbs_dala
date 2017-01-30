from django.shortcuts import render
from settings.models import District, Province
from users.decorators import permission_required
from dala.views import fetch_districts


@permission_required("district")
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


@permission_required("district")
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


@permission_required("district")
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


@permission_required("provincial")
def dl_edu_province(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/summary_damage_losses_education_sector_province.html', context)


@permission_required("national")
def dl_edu_nationwide(request):
    districts = District.objects.all()
    provinces = Province.objects.all()
    filtered_incidents = fetch_districts(request.user)
    incidents = filtered_incidents['incidents']
    context = {
        'districts': districts,
        'provinces': provinces,
        'incidents': incidents,
    }
    return render(request, 'damage_losses/summary_damage_losses_education_sector_nationwide.html', context)

