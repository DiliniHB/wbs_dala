from django.db import models

class BcsStructure(models.Model):
    asset = models.CharField(max_length=255, blank=True, null=True)
    avg_rep_cost = models.FloatField(blank=True, null=True)
    avg_repair_cost_roof = models.FloatField(blank=True, null=True)
    avg_repair_cost_wall = models.FloatField(blank=True, null=True)
    avg_repair_cost_flooring = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bcs_structure'


class DlaOagenciesNatn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dla_oagencies_natn'


class DlaProvince(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dla_province'


class DladAowshipDgovn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlad_aowship_dgovn'


class DladAowshipMoagency(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlad_aowship_moagency'


class DladAowshipPgovn(models.Model):
    asset_owship = models.CharField(max_length=255, blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlad_aowship_pgovn'


class DlagdDmgMachinery(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.IntegerField(blank=True, null=True)
    num_partial_damaged = models.IntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlagd_dmg_machinery'


class DlagdDmgOfficeEquipment(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    num_tot_destroyed = models.IntegerField(blank=True, null=True)
    num_partial_damaged = models.IntegerField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlagd_dmg_office_equipment'


class DlagdDmgStructure(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    td_num_structures = models.IntegerField(blank=True, null=True)
    td_total_squarem = models.FloatField(blank=True, null=True)
    pd_num_structures = models.IntegerField(blank=True, null=True)
    pd_total_squarem_roof = models.FloatField(blank=True, null=True)
    pd_total_squarem_wall = models.FloatField(blank=True, null=True)
    pd_total_squarem_floor = models.FloatField(blank=True, null=True)
    damages = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlagd_dmg_structure'


class DlagdLosses(models.Model):
    name_dept = models.CharField(max_length=255, blank=True, null=True)
    los_year1 = models.FloatField(blank=True, null=True)
    los_year2 = models.FloatField(blank=True, null=True)
    total_losses = models.FloatField(blank=True, null=True)
    district = models.ForeignKey('District', db_column='district', blank=True, null=True)
    created_user = models.IntegerField(blank=True, null=True)
    lmu = models.IntegerField(blank=True, null=True)
    created_date = models.DateTimeField(blank=True, null=True)
    lmd = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dlagd_losses'


class Ownership(models.Model):
    ownership_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ownership'