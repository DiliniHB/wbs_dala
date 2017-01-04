var app = angular.module('dlHealthSectorDistrictApp', []);

app.controller("DlHealthSectorDistrictController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.dl_data={};
 $scope.is_edit=false;
 $scope.submitted = false;
  $scope.Districts=[];
 //bind Disasteroption
    $scope.dlhealthsectordistrict = {
        'Table_8': {
            'DshPubLmh': [{
                facilities_assets : 'Teaching Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Provincial General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'District General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPubMoh': [{
                facilities_assets : 'Offices',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPubOmf': [{
                facilities_assets : 'Base Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Divisional Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Rural Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Central Dispensary',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'PMCUs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'PHCCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'MCHCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshPvtFa': [{
                facilities_assets : 'Private Clinics',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages :null,
                losses_y1 :null,
                losses_y2  :null,
                total_losses :null,
                }],
                'DshTdlOwship': [{
                ownership : 'Public Sector',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                },{
                ownership : 'Private Sector',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                },{
                ownership : 'TOTAL',
                damages :null,
                losses_y1 :null,
                losses_y2 :null,
                total :null,
                }

                ]



        }
    }



   $scope.saveDlData = function(form) {
        console.log($scope.data);
         $scope.submitted = true;

    if(form.$valid){

        $http({
            method: 'POST',
            url: '/damage_losses/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({

                'table_data': $scope.dlhealthsectordistrict,
                'com_data': {
                    'district': $scope.district,
                    'incident' : $scope.incident,


                }, 'is_edit':$scope.is_edit
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
$("#modal-container-239453").modal('show');
            console.log(response);

        }, function errorCallback(response) {

            console.log(response);
        });
        }

    }


    // get relevant damage_losses data for calculations


    $scope.changedValue = function getDlData(form)
    {

        if($scope.incident){


       $http({
    method: "POST",
    url: "/damage_losses/fetch_incident_districts",
    data: angular.toJson({'incident': $scope.incident }),
    }).success(function(data) {
        $scope.districts = data;
        $scope.district = "";
        console.log(data);

    })
        }

        if($scope.district && $scope.incident){
        console.log($scope.district);
        console.log($scope.incident);

        $http({
        method: 'POST',
        url: '/damage_losses/dl_get_data',
        contentType: 'application/json; charset=utf-8',
        data: angular.toJson({
                'table_name':'Table_8',
                'db_tables': ['DmhDfNum','DmhDfPaf','DmhPdfaNum','DmhPdfaPaf','DmhPdfaOassets','DmhLosFi','DmhLosCud','DmhLosHoc','DmhLosOue','DmfDfaNum','DmfDfaPaf','DmfPdfaNum','DmfPdfaPaf','DmfPdaOassets','DmfLosFi','DmfLosCud','DmfLosHoc','DmfLosOue','DapNapTmf','DapBefPc1','DapBefPcn','DapBefOther'],
                'com_data': {
                    'district': $scope.district,
                    'incident': $scope.incident,

                }


            }),
        dataType: 'json',
        }).then(function successCallback(response) {
            var data = response.data;
            angular.forEach(data, function(value, key) {
              $scope.dl_data[key] = JSON.parse(value);
            });

            console.log($scope.dl_data);

        }, function errorCallback(response) {

            console.log(response);
        });
        }


    }






 }])


