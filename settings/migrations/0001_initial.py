# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BdSessionKeys',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('data_type', models.CharField(max_length=120, null=True, blank=True)),
                ('key', models.BigIntegerField(null=True, blank=True)),
                ('date', models.DateTimeField(null=True, blank=True)),
                ('user', models.IntegerField(null=True, blank=True)),
                ('bs_date', models.CharField(max_length=255, null=True, blank=True)),
            ],
            options={
                'db_table': 'bd_session_keys',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DisasterType',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=255, null=True, blank=True)),
                ('description', models.TextField(null=True, blank=True)),
            ],
            options={
                'db_table': 'disaster_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=255, null=True, blank=True)),
            ],
            options={
                'db_table': 'district',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Province',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=255, null=True, blank=True)),
            ],
            options={
                'db_table': 'province',
                'managed': False,
            },
        ),
    ]
