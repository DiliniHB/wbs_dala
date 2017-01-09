from django.conf.urls import url
from .import views


urlpatterns = [

    url(r'^dl_govn_edu_facilities$', views.dl_govn_edu_facilities, name='dl_govn_edu_facilities'),
    #url(r'^dl_govn_edu_facilities$', views.dl_govn_edu_facilities, name='dl_govn_edu_facilities'),
]