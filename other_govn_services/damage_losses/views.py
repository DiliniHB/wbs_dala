from django.shortcuts import render
from settings.models import District, Province
from .models import Ownership
from incidents.models import IncidentReport


# Table 2
def dl_assessment_of_govn_dep_or_ofc_in_a_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    ownership = Ownership.objects.all()

    context = {
        'districts': districts,
        'incidents': incidents,
        'ownership': ownership
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