"""
Django settings for dala project.

Generated by 'django-admin startproject' using Django 1.10.3.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'z(-pb7d!3-efta70vsay=by7=*ng#=9vayn@dc)9b8ddcg%54&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'incidents',
    'dashboard',
    # 'tastypie',
    'settings',
    'users',
    'reports',
    'charts',
    'health',
    'health.base_line',
    'health.damage_losses',
    'education',
    # 'db_tools'
    'other_govn_services',
    'mining',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'dbtools.middleware.ReadOnlyMiddleware',
]

ROOT_URLCONF = 'dala.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dala.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'OPTIONS': {
            'options': '-c search_path=health,public,other_government,education,mining'
        },

        'NAME': 'dala_2017',
        'USER': 'postgres',

    },

}

# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'

# table properties
TABLE_PROPERTY_MAPPER = {
    'health': {
        'Table_1':
            {'BhsPlc': ['children', 'elderly', 'female', 'male', 'id'],
             'BhsComDiseases': ['com_disease', 'male', 'female', 'children', 'elderly', 'id'],
             'BhsVi': ['children', 'elderly', 'female', 'male', 'vital_indicators', 'id'],
             'BhsOi': ['unit_measure', 'other_indicators', 'id']
             },
        'Table_2':
            {
                'BmfPubMf': ['type_pub_mf', 'number', 'male', 'female', 'id'],
                'BmfPvtMf': ['type_pvt_mf', 'number', 'male', 'female', 'id']

            },
        'Table_8':
            {
                'DshPubLmh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                              'losses_y1', 'losses_y2', 'total_losses'],
                'DshPubMoh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                              'losses_y1', 'losses_y2', 'total_losses'],
                'DshPubOmf': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                              'losses_y1', 'losses_y2', 'total_losses'],
                'DshPvtFa': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                             'losses_y1', 'losses_y2', 'total_losses'],
                'DshTdlOwship': ['ownership', 'damages', 'losses_y1', 'losses_y2', 'total']
            },
        'Table_4':
            {
                'BucOmarStructure': ['particulars', 'base_hospital', 'divisional_hospital',
                                     'rural_hospital',
                                     'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                     'mat_child_health_clinics', 'id'],
                'BucOmarSupplies': ['particulars', 'base_hospital', 'divisional_hospital',
                                    'rural_hospital',
                                    'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                    'mat_child_health_clinics', 'id'],
                'BucOmarMequipment': ['particulars', 'base_hospital', 'divisional_hospital',
                                      'rural_hospital',
                                      'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                      'mat_child_health_clinics', 'id'],
                'BucOmarOassets': ['particulars', 'base_hospital', 'divisional_hospital',
                                   'rural_hospital',
                                   'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                   'mat_child_health_clinics', 'id'],
                'BucOmarcCrpm': ['particulars', 'base_hospital', 'divisional_hospital',
                                 'rural_hospital',
                                 'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                 'mat_child_health_clinics', 'id'],
                'BucOmarcStructure': ['particulars', 'base_hospital', 'divisional_hospital',
                                      'rural_hospital',
                                      'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                      'mat_child_health_clinics', 'id'],
                'BucOmarcMequipment': ['particulars', 'base_hospital', 'divisional_hospital',
                                       'rural_hospital',
                                       'central_dispensary', 'pri_med_cunits',
                                       'pri_health_ccenters',
                                       'mat_child_health_clinics', 'id'],
                'BucOmarcOassets': ['particulars', 'base_hospital', 'divisional_hospital',
                                    'rural_hospital',
                                    'central_dispensary', 'pri_med_cunits', 'pri_health_ccenters',
                                    'mat_child_health_clinics', 'id']

            },
        'Table_10':
            {
                # 'DsnPubPnLmh': ['facilities_assets', 'total_num_affected', 'male', 'female',
                #                 'total_damages', 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPubPnMoh': ['facilities_assets', 'total_num_affected', 'male', 'female',
                #                 'total_damages', 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPubPnOmc': ['facilities_assets', 'total_num_affected', 'male', 'female',
                #                 'total_damages', 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPvtPn': ['facilities_assets', 'total_num_affected', 'male', 'female',
                #              'total_damages', 'losses_y1',
                #              'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPubP1Lmh': ['facilities_assets', 'total_num_affected', 'male', 'female',
                #                 'total_damages', 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                # 'DsnPubP1Moh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPubP1Omc': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1',
                #                 'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnPvtP1': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages', 'losses_y1',
                #              'losses_y2', 'total_losses', 'id'],
                #
                # 'DsnTdlOwship': ['ownership',
                #                  'damages',
                #                  'losses_y1',
                #                  'losses_y2',
                #                  'total', 'id']

                'DshPubLmhProvince': ['facilities_assets', 'total_num_affected', 'male', 'female',
                                      'total_damages', 'losses_y1',
                                      'losses_y2', 'total_losses', 'id'],
                'DshPubMohProvince': ['facilities_assets', 'total_num_affected', 'male', 'female',
                                      'total_damages', 'losses_y1',
                                      'losses_y2', 'total_losses', 'id'],
                'DshPubOmfProvince': ['facilities_assets', 'total_num_affected', 'male', 'female',
                                      'total_damages', 'losses_y1',
                                      'losses_y2', 'total_losses', 'id'],
                'DshPvtFaProvince': ['facilities_assets', 'total_num_affected', 'male', 'female',
                                     'total_damages', 'losses_y1',
                                     'losses_y2', 'total_losses', 'id'],

            },

        'Table_3':
            {
                'BucMarStructure': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                    'district_general_hospital', 'office', 'other', 'id'],
                'BucMarSupplies': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                   'district_general_hospital', 'id'],
                'BucMarMequipment': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                     'district_general_hospital', 'id'],
                'BucMarOassets': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                  'district_general_hospital', 'office', 'other', 'id'],
                'BucMarcStructures': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                      'district_general_hospital', 'office', 'other', 'id'],
                'BucMarcMequipment': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                      'district_general_hospital', 'id'],
                'BucMarcOassets': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                   'district_general_hospital', 'office', 'other', 'id'],
                'BucMarcCrpm': ['particulars', 'teaching_hospital', 'provincial_general_hospital',
                                'district_general_hospital', 'office', 'other', 'id'],
            },
        'Table_5':
            {
                'DmhDfNum': ['num_des_facilities', 'teaching_hospital', 'provincial_general_hospital',
                             'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhDfPaf': ['num_patients_affected', 'teaching_hospital', 'provincial_general_hospital',
                             'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhNdatFacStructure': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                        'district_general_hospital', 'office', 'total', 'id'],
                'DmhNdatFacSupplies': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                       'district_general_hospital', 'total', 'id'],
                'DmhNdatFacMequipment': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                         'district_general_hospital', 'total', 'id'],
                'DmhNdatFacOassets': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                      'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhPdfaNum': ['num_des_facilities', 'teaching_hospital', 'provincial_general_hospital',
                               'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhPdfaPaf': ['num_patients_affected', 'teaching_hospital', 'provincial_general_hospital',
                               'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhPdfaStructure': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                     'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhPdfaMequipment': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                      'district_general_hospital', 'total', 'id'],
                'DmhPdfaOassets': ['asset', 'teaching_hospital', 'provincial_general_hospital',
                                   'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhLosFi': ['type_of_losses', 'teaching_hospital', 'provincial_general_hospital',
                             'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhLosCud': ['type_of_losses', 'teaching_hospital', 'provincial_general_hospital',
                              'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhLosHoc': ['type_of_losses', 'teaching_hospital', 'provincial_general_hospital',
                              'district_general_hospital', 'office', 'other', 'total', 'id'],
                'DmhLosOue': ['type_of_losses', 'teaching_hospital', 'provincial_general_hospital',
                              'district_general_hospital', 'office', 'other', 'total', 'id'],
            }, 'Table_7':
            {
                'DapNapTmf': ['type_med_fac', 'num_affected_fac', 'male', 'female', 'id'],

                'DapBefPc1': ['pvt_clinics', 'est_replacement_cost', 'est_repair_cost', 'total_damages',
                              'est_losses_y1', 'est_losses_y2', 'total_losses', 'id'],

                'DapBefPcn': ['pvt_clinics', 'est_replacement_cost', 'est_repair_cost', 'total_damages',
                              'est_losses_y1', 'est_losses_y2', 'total_losses', 'id'],
                'DapBefOther': ['pvt_clinics', 'est_replacement_cost', 'est_repair_cost', 'total_damages',
                                'est_losses_y1', 'est_losses_y2', 'total_losses', 'id']
            }, 'Table_9':
            {
                # 'DspPubD1Lmh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPubD1Moh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPubD1Omc': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPubDnLmh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPubDnMoh': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPubDnOmc': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #                 'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPvtD1': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #              'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspPvtDn': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                #              'losses_y1', 'losses_y2', 'total_losses', 'id'],
                # 'DspTdlOwship': ['ownership', 'damages', 'losses_y1', 'losses_y2', 'total'],
                'DshPubLmhDistrict': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                                      'losses_y1', 'losses_y2', 'total_losses', 'id', 'district'],
                'DshPubMohDistrict': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                                      'losses_y1', 'losses_y2', 'total_losses', 'id', 'district'],
                'DshPubOmfDistrict': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                                      'losses_y1', 'losses_y2', 'total_losses', 'id', 'district'],
                'DshPvtFaDistrict': ['facilities_assets', 'total_num_affected', 'male', 'female', 'total_damages',
                                     'losses_y1', 'losses_y2', 'total_losses', 'id', 'district']
            },
        'Table_6':
            {
                'DmfDfaNum': ['num_des_facilities',
                              'base_hospital',
                              'divisional_hospital',
                              'rural_hospital',
                              'central_dispensary',
                              'pmcus',
                              'phccs',
                              'mchcs',
                              'total', 'id'],
                'DmfDfaPaf': ['num_patients_affected',
                              'base_hospital',
                              'divisional_hospital',
                              'rural_hospital',
                              'central_dispensary',
                              'pmcus',
                              'phccs',
                              'mchcs',
                              'total', 'id'],
                'DmfDaStructure': ['asset',
                                   'base_hospital',
                                   'divisional_hospital',
                                   'rural_hospital',
                                   'central_dispensary',
                                   'pmcus',
                                   'phccs',
                                   'mchcs',
                                   'total', 'id'],
                'DmfDaSupplies': ['asset',
                                  'base_hospital',
                                  'divisional_hospital',
                                  'rural_hospital',
                                  'central_dispensary',
                                  'pmcus',
                                  'phccs',
                                  'mchcs',
                                  'total', 'id'],

                'DmfDaMequipment': ['asset',
                                    'base_hospital',
                                    'divisional_hospital',
                                    'rural_hospital',
                                    'central_dispensary',
                                    'pmcus',
                                    'phccs',
                                    'mchcs',
                                    'total', 'id'],

                'DmfDaOassets': ['asset',
                                 'base_hospital',
                                 'divisional_hospital',
                                 'rural_hospital',
                                 'central_dispensary',
                                 'pmcus',
                                 'phccs',
                                 'mchcs',
                                 'total', 'id'],

                'DmfPdfaNum': ['num_pdamaged_facilities',
                               'base_hospital',
                               'divisional_hospital',
                               'rural_hospital',
                               'central_dispensary',
                               'pmcus',
                               'phccs',
                               'mchcs',
                               'total', 'id'],

                'DmfPdfaPaf': ['num_patients_affected',
                               'base_hospital',
                               'divisional_hospital',
                               'rural_hospital',
                               'central_dispensary',
                               'pmcus',
                               'phccs',
                               'mchcs',
                               'total', 'id'],

                'DmfPdaStructure': ['asset',
                                    'base_hospital',
                                    'divisional_hospital',
                                    'rural_hospital',
                                    'central_dispensary',
                                    'pmcus',
                                    'phccs',
                                    'mchcs',
                                    'total', 'id'],

                'DmfPdaMequipment': ['asset',
                                     'base_hospital',
                                     'divisional_hospital',
                                     'rural_hospital',
                                     'central_dispensary',
                                     'pmcus',
                                     'phccs',
                                     'mchcs',
                                     'total', 'id'],

                'DmfPdaOassets': ['asset',
                                  'base_hospital',
                                  'divisional_hospital',
                                  'rural_hospital',
                                  'central_dispensary',
                                  'pmcus',
                                  'phccs',
                                  'mchcs',
                                  'total', 'id'],

                'DmfLosFi': ['type_of_losses',
                             'base_hospital',
                             'divisional_hospital',
                             'rural_hospital',
                             'central_dispensary',
                             'pmcus',
                             'phccs',
                             'mchcs',
                             'total', 'id'],

                'DmfLosCud': ['type_of_losses',
                              'base_hospital',
                              'divisional_hospital',
                              'rural_hospital',
                              'central_dispensary',
                              'pmcus',
                              'phccs',
                              'mchcs',
                              'total', 'id'],

                'DmfLosHoc': ['type_of_losses',
                              'base_hospital',
                              'divisional_hospital',
                              'rural_hospital',
                              'central_dispensary',
                              'pmcus',
                              'phccs',
                              'mchcs',
                              'total', 'id'],

                'DmfLosOue': ['type_of_losses',
                              'base_hospital',
                              'divisional_hospital',
                              'rural_hospital',
                              'central_dispensary',
                              'pmcus',
                              'phccs',
                              'mchcs',
                              'total', 'id']

            }

    },
    'mining': {
        'Table_1': {

            'BmaImFn': ['name_min_outputs',
                        'avg_per_year',
                        'firm_id',
                        'id'],
            'BmaImFirmNum': ['male',
                             'female',
                             'firm_id',
                             'id'],

        },
        'Table_2': {

            'BmaAmMin': ['minerals',
                         'avg_per_year', 'id'],
            'BmaAmMinNum': ['male',
                            'female',
                            'id'],

        },
        'Table_3': {
            'DloNumEmps': [
                'male', 'female', 'firm_id', 'id'],
            'DloDmgStructures': [
                'assets', 'rep_tot_dassets', 'repair_pdmg_assets', 'tot_damages', 'firm_id', 'id'],
            'DloDmgEquipment': [
                'assets', 'rep_tot_dassets', 'repair_pdmg_assets', 'tot_damages', 'firm_id', 'id'],
            'DloDmgMachinery': [
                'assets', 'rep_tot_dassets', 'repair_pdmg_assets', 'tot_damages', 'firm_id', 'id'],
            'DloDmgVehicles': [
                'assets', 'rep_tot_dassets', 'repair_pdmg_assets', 'tot_damages', 'firm_id', 'id'],
            'DloDmgStocks': [
                'assets', 'rep_tot_dassets', 'repair_pdmg_assets', 'tot_damages', 'firm_id', 'id'],
            'DloLosPlos': [
                'type_los', 'avg_per_year', 'red_voutput_year1', 'red_voutput_year2', 'los_year1', 'los_year2', 'tot_losses', 'firm_id', 'id'],
            'DloLosOlos': [
                'type_los', 'los_year1', 'los_year2', 'tot_losses', 'firm_id', 'id']
        },
        'Table_4': {
            'DlaDmgStructures': [
                'assets',
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages',
                'id'
            ],
            'DlaDmgEquipment': [
                'assets',
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages',
                'id'
            ],
            'DlaDmgMachinery': [
                'assets',
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages',
                'id'
            ],
            'DlaDmgStocks': [
                'assets',
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages',
                'id'
            ],
            'DlaLosPlos': [
                'type_los',
                'avg_per_year',
                'red_voutput_year1',
                'red_voutput_year2',
                'los_year1',
                'los_year2',
                'tot_losses',
                'id'
            ],
            'DlaLosOlos': [
                'type_los',
                'avg_per_year',
                'red_voutput_year1',
                'red_voutput_year2',
                'los_year1',
                'los_year2',
                'tot_losses',
                'id'
            ]
        },
        'Table_5': {

            'DloDmgDistrict': [
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages',
                'firm__name',
                'ownership'

                ],
            'DlaDmgDistrict': [
                'rep_tot_dassets',
                'repair_pdmg_assets',
                'tot_damages'
                ],

            'DlaLosDistrict': [
                'los_year1',
                'los_year2',
                'tot_losses'
                ],
            'DloLosDistrict': [
                'los_year1',
                'los_year2',
                'tot_losses',
                'firm__name',
                'ownership'

                ],



        },
        'Table_6': {

            'DldTmfIfProvince': [
                'type_min_firms',
                'year1_damages_pub',
                'year1_damages_pvt',
                'year1_losses_pub',
                'year1_losses_pvt',
                'year2_losses_pub ',
                'year2_losses_pvt',
                'total_pub',
                'total_pvt',
                'province',
                'incident',
                'id'
            ]

        }

    },
    'other_govn_services': {
        'Table_2': {
            'DlagdDmgStructure': [
                    'name_dept',
                    'td_num_structures',
                    'td_total_squarem',
                    'pd_num_structures',
                    'pd_total_squarem_roof',
                    'pd_total_squarem_wall',
                    'pd_total_squarem_floor',
                    'damages',
                    'id'
            ],
            'DlagdDmgOfficeEquipment': [
                    'name_dept',
                    'num_tot_destroyed',
                    'num_partial_damaged',
                    'damages',
                    'id'
            ],
            'DlagdDmgMachinery': [
                    'name_dept',
                    'num_tot_destroyed',
                    'num_partial_damaged',
                    'damages',
                    'id'
            ],
            'DlagdLosses': [
                'name_dept',
                'los_year1',
                'los_year2',
                'total_losses',
                'id'
            ]
        }
    }
}

AUTH_USER_MODEL = 'users.MyUser'

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.RemoteUserBackend',
    'django.contrib.auth.backends.ModelBackend',
)
