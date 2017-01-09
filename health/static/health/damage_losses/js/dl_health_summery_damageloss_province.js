var app = angular.module('dlHealthSummeryDamageLossProvinceApp', []);

app.controller("dlHealthSummeryDamageLossProvinceAppController", ['$scope','$http',function ($scope,$http) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.province = "";
    $scope.is_edit = false;
    $scope.submitted = false;

    $scope.is_valid_data = true;

    //bind Disasteroption
    var init_data = {
        'health': {
            'Table_9': {
                //tab 1
    //            'DspPubD1Lmh': [{
    //                facilities_assets : 'Teaching Hospitals',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },  {
    //                facilities_assets : 'Provincial General Hospitals',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },  {
    //                facilities_assets : 'District General Hospitals',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },  {
    //                facilities_assets : 'Total',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }],
    //            'DspPubD1Moh': [{
    //                facilities_assets : 'Offices',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Others',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Total',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }],
    //            'DspPubD1Omc': [{
    //                facilities_assets : 'Base Hospital',
    //                total_num_affected :0,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Divisional Hospital',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Rural Hospital',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Central Dispensary',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'PMCUs',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'PHCCs',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'MCHCs',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'Total',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            },{
    //                facilities_assets : 'TOTAL',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }],

                'DspPubDnLmh': [{
                    facilities_assets : 'Teaching Hospitals',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'Provincial General Hospitals',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'District General Hospitals',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'Total',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }],
                'DspPubDnMoh': [{
                    facilities_assets : 'Offices',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'Others',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'Total',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }],
                'DspPubDnOmc': [{
                    facilities_assets : 'Base Hospital',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },{
                    facilities_assets : 'Divisional Hospital',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'Rural Hospital',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'Central Dispensary',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'PMCUs',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'PHCCs',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'MCHCs',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'Total',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'TOTAL',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'GRAND TOTAL',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }],
                //tab 2
    //            'DspPvtD1': [{
    //                facilities_assets : 'Private Clinics',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }, {
    //                facilities_assets : 'Others',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }, {
    //                facilities_assets : 'Total',
    //                total_num_affected : null,
    //                male : null,
    //                female : null,
    //                total_damages: null,
    //                losses_y1 : null,
    //                losses_y2 : null,
    //                total_losses : null,
    //            }],
                'DspPvtDn': [{
                    facilities_assets : 'Private Clinics',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'Others',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                }, {
                    facilities_assets : 'Total',
                    total_num_affected : null,
                    male : null,
                    female : null,
                    total_damages: null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total_losses : null,
                },
//                {
//                    facilities_assets : 'TOTAL',
//                    total_num_affected : null,
//                    male : null,
//                    female : null,
//                    total_damages: null,
//                    losses_y1 : null,
//                    losses_y2 : null,
//                    total_losses : null,
//                }
                ],
                //tab 3
                'DspTdlOwship': [{
                    ownership : 'Public Sector',
                    damages : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total : null,
                }, {
                    ownership : 'Private Sector',
                    damages : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total : null,
                }, {
                    ownership : 'TOTAL',
                    damages : null,
                    losses_y1 : null,
                    losses_y2 : null,
                    total : null,
                }]
            }
        }
    }

    $scope.dlhealthsummarydamageprovince = init_data;

    $scope.saveDlHealthSummeryDamagelossProvince = function(form) {
       $scope.submitted = true;

       if(form.$valid){
        console.log($scope.data);
        $http({
            method: 'POST',
            url: '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlhealthsummarydamageprovince,
                'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                },
                'is_edit': false
            }),
            dataType: 'json',
        }).then(function mySucces(response) {
            //if data sent to server side method successfull
//$("#modal-container-239453").modal('show');
//            console.log(response);
            console.log(response);
            if(response.data == 'False')
                $scope.is_valid_data = false;
            else
                $("#modal-container-239453").modal('show');
            }, function myError(response) {
                //if data sent to server side method unsuccessfull
                console.log(response);
        });
        }
    }

    // get relevant damage_losses data for calculations
    $scope.changedValue = function getDlData(selectProvinces) {
//        alert(selectProvinces);
        if($scope.incident && selectProvinces) {
          fetchProvinces();
        }
        if($scope.province && $scope.incident) {
            console.log($scope.district);
            console.log($scope.incident);
            $http({
                method: 'POST',
                url: '/dl_get_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_name': 'Table_9',
                    'db_tables': ['DshPubLmhProvince', 'DshPubMohProvince', 'DshPubOmfProvince',  'DshPvtFaProvince',  'DshTdlOwshipProvince'],
                    'com_data': {
                        'province': $scope.province,
                        'incident': $scope.incident,
                    },
                    'is_edit' : $scope.is_edit,
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                    $scope.bs_data[key] = JSON.parse(value);
                });

                console.log($scope.bs_data);

            }, function errorCallback(response) {

                console.log(response);
            });
        }
    }
$scope.provinces = [];

    function fetchProvinces()
    {
          $http({
            method: "POST",
            url: '/fetch_incident_provinces',
            data: angular.toJson({
                    'incident': $scope.incident
                   }),
            }).success(function(data) {
                $scope.provinces = data;
                $scope.province = "";

            })

    }

    $scope.dlDataEdit = function(form){
        $scope.is_edit = true;
        $scope.submitted = true;

       if(form.$valid){
            $http({
            method: "POST",
            url: '/dl_fetch_edit_data',
            data: angular.toJson({
            'table_name':  'Table_9',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
    //               'is_edit':$scope.is_edit
                   }),
            }).success(function(data) {

            console.log(data);

            $scope.dlhealthsummarydamageprovince = data;
            })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlhealthsummarydamageprovince = init_data;
    }
 }])