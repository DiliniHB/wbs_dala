from tastypie.resources import ModelResource
from settings.models import District, Province
from base_line.models import BmfPubMf


class ProvinceResource(ModelResource):
    class Meta:
        queryset = Province.objects.all()
        allowed_methods = ['get']


class DistrictResource(ModelResource):
    class Meta:
        queryset = District.objects.all()
        allowed_methods = ['get']


class BmfPubMfResource(ModelResource):
    class Meta:
        queryset = BmfPubMf.objects.all()
        allowed_methods = ['get']
