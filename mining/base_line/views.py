from django.shortcuts import render
from settings.models import District
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import yaml
from .models import Firm
from django.http import HttpResponse


def mn_bs_info_industrial(request):
    districts = District.objects.all()

    context = {
        'districts': districts,

    }
    return render(request, 'base_line/mining_industrial_firms.html', context)


def mn_bs_info_artisanal(request):
    districts = District.objects.all()

    context = {
        'districts': districts,

    }
    return render(request, 'base_line/mining_artisanal_firms.html', context)


@csrf_exempt
def add_firm(request):
    firm_data = (yaml.safe_load(request.body))
    firm_name = firm_data['firm_name']
    firm = Firm(firm_name=firm_name)
    firm.save()

    return HttpResponse("Success")


@csrf_exempt
def edit_firm(request):
    firm_data = (yaml.safe_load(request.body))
    firm_id = firm_data['firm_id']
    firm_name = firm_data['firm_name']

    Firm.objects.filter(pk=firm_id).update(firm_name=firm_name)

    return HttpResponse("Success")


@csrf_exempt
def get_ownership_firm(request):
    firm_data = (yaml.safe_load(request.body))
    firm_id = firm_data['firm_id']

    firm = Firm.objects.get(pk=firm_id)
    firm_ownership = firm.ownership

    return HttpResponse(firm_ownership)
