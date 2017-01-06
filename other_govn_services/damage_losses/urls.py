from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_assessment_of_govn_dep_or_ofc_in_a_district', views.dl_assessment_of_govn_dep_or_ofc_in_a_district, name='dl_assessment_of_govn_dep_or_ofc_in_a_district'),
]