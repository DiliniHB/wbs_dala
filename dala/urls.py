from django.conf.urls import include, url
from django.contrib import admin
# from tastypie.api import Api
from .import views
# from api.resources import DistrictResource, ProvinceResource, BmfPubMfResource

# v1_api = Api(api_name='v1')
# v1_api.register(DistrictResource())
# v1_api.register(ProvinceResource())
# v1_api.register(BmfPubMfResource())

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('dashboard.urls', namespace='dashboard')),
    url(r'^dashboard/', include('dashboard.urls', namespace='dashboard')),
    # url(r'^api/', include(v1_api.urls)),
    url(r'^health/', include('health.urls', namespace='health')),
    url(r'^education/', include('education.urls', namespace='education')),
    url(r'^users/', include('users.urls', namespace='users')),
    url(r'^reports/', include('reports.urls', namespace='reports')),
    url(r'^charts/', include('charts.urls', namespace='charts')),

    # common functions
    url(r'^bs_get_data$', views.bs_get_data, name='bs_get_data'),
    url(r'^bs_get_data_mock$', views.bs_get_data_mock, name='bs_get_data_mock'),
    url(r'^bs_fetch_edit_data$', views.bs_fetch_edit_data, name='bs_fetch_edit_data'),
    url(r'^bs_save_data$', views.bs_save_data, name='bs_save_data'),
    url(r'^fetch_entities$', views.fetch_entities, name='fetch_entities'),
    url(r'^add_entity$', views.add_entity, name='add_entity'),

    url(r'^dl_save_data$', views.dl_save_data, name='dl_save_data'),
    url(r'^dl_get_data$', views.dl_get_data, name='dl_get_data'),
    url(r'^dl_fetch_edit_data$', views.dl_fetch_edit_data, name='dl_fetch_edit_data'),
    url(r'^dl_fetch_district_disagtn$', views.dl_fetch_district_disagtn, name='dl_fetch_district_disagtn'),

    url(r'^fetch_incident_districts$', views.fetch_incident_districts, name='fetch_incident_districts'),
    url(r'^fetch_incident_provinces$', views.fetch_incident_provinces, name='fetch_incident_provinces'),

    # other govn services
    url(r'^other_govn_services/', include('other_govn_services.urls', namespace='other_govn_services')),

    #mining
    url(r'^mining/', include('mining.urls', namespace='mining')),
    url(r'^bs_mining_fetch_edit_data$', views.bs_mining_fetch_edit_data, name='bs_mining_fetch_edit_data'),
    url(r'^dl_fetch_district_disagtn$', views.dl_fetch_district_disagtn, name='dl_fetch_district_disagtn'),
    url(r'^dl_fetch_total_data$', views.dl_fetch_total_data, name='dl_fetch_total_data'),






]
