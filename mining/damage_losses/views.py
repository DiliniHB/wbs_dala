from django.shortcuts import render
from settings.models import District
from incidents.models import IncidentReport
from .models import Firm
import yaml, json
from django.http import HttpResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.apps import apps

# Create your views here.


def damages_losses_of_mining_firms(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    firm = Firm.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
        'firm': firm,
    }

    return render(request, 'damage_losses/damages_losses_of_mining_firms.html', context)


def damages_losses_artisanal_mining(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,

    }

    return render(request, 'damage_losses/damages_losses_artisanal_mining.html', context)


def summary_damage_losses_district(request):
    districts = District.objects.all()
    incidents = IncidentReport.objects.all()
    context = {
        'districts': districts,
        'incidents': incidents,
    }

    return render(request, 'damage_losses/summary_damages_losses_district.html', context)


def summary_damage_losses_nationwide(request):
    incidents = IncidentReport.objects.all()
    context = {
        'incidents': incidents,
    }

    return render(request, 'damage_losses/summary_damages_losses_nationwide.html', context)

