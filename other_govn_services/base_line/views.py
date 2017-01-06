from django.shortcuts import render
from settings.models import District


def bs_other_gov_info_costs_structures_other_assets_district(request):
    districts = District.objects.all()
    context = {
        'districts': districts
    }
    return render(request, 'base_line/bs_info_for_the_costs_of_structures_and_other_assets_in_the_district.html', context)


