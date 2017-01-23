from django.conf.urls import url
from .import views


urlpatterns = [

    url(r'^dl_govn_edu_facilities$', views.dl_govn_edu_facilities, name='dl_govn_edu_facilities'),
    url(r'^dl_pvt_edu_facilities$', views.dl_pvt_edu_facilities, name='dl_pvt_edu_facilities'),
    url(r'^dl_edu_district$', views.dl_edu_district, name='dl_edu_district'),

    url(r'^fetch_schools$', views.fetch_schools, name='fetch_schools'),
]