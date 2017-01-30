from django.shortcuts import render
from settings.models import District, Province
from .models import Ownership
from incidents.models import IncidentReport
from users.decorators import permission_required
from dala.views import fetch_districts


# Table 2
@permission_required("district")
def dl_assessment_of_govn_dep_or_ofc_in_a_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']
    ownership = Ownership.objects.all()

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'ownership': ownership
    }
    return render(request, 'damage_losses/dl_assessment_of_government_departments_or_offices_in_a_district.html', context)


# Table 3
@permission_required("district")
def dl_damage_loss_assessment_district(request):
    user = request.user
    fetch_data = fetch_districts(user)
    filtered_districts = fetch_data['districts']
    filtered_incidents = fetch_data['incidents']

    context = {
        'districts': filtered_districts,
        'incidents': filtered_incidents,
        'ownership': ownership
    }

    return render(request, 'damage_losses/dl_damage_loss_assessment_district.html', context)


# Table 4
@permission_required("provincial")
def dl_damage_loss_assessmen_province(request):
    provinces = Province.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'provinces': provinces,
        'incidents': incidents
    }
    return render(request, 'damage_losses/dl_damage_loss_assessmen_province.html', context)


# Table 5
@permission_required("national")
def dl_assessmen_nationwide(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents
    }
    return render(request, 'damage_losses/dl_assessmen_nationwide.html', context)