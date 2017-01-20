from django.conf.urls import url
from .import views

urlpatterns = [
    url(r'^dl_assessment_of_govn_dep_or_ofc_in_a_district', views.dl_assessment_of_govn_dep_or_ofc_in_a_district, name='dl_assessment_of_govn_dep_or_ofc_in_a_district'),
    url(r'^dl_damage_loss_assessment_district', views.dl_damage_loss_assessment_district, name='dl_damage_loss_assessment_district'),
    url(r'^dl_damage_loss_assessmen_province', views.dl_damage_loss_assessmen_province, name='dl_damage_loss_assessmen_province'),
    url(r'^dl_assessmen_nationwide', views.dl_assessmen_nationwide, name='dl_assessmen_nationwide'),
]