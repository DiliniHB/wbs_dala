from django.shortcuts import render
from dala.views import fetch_districts


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
