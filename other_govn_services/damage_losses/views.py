from django.shortcuts import render
from settings.models import District


def dl_assessment_of_govn_dep_or_ofc_in_a_district(request):
    districts = District.objects.all()
    context = {
        'districts': districts
    }
    return render(request, 'damage_losses/dl_assessment_of_government_departments_or_offices_in_a_district.html', context)