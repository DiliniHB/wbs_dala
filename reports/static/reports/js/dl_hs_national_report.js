var app = angular.module('dlHsNationalApp', []);

app.controller("DlHsNationalController", ['$scope','$http',function ($scope,$http) {

 $scope.district;
 $scope.incident;
 $scope.submitted = false;

    $scope.dlHsNational = {
        'Table_10': {
            'DsnPubP1Lmh': [{
                facilities_assets : 'Teaching Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Provincial General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'District General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPubP1Moh': [{
                facilities_assets : 'Offices',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPubP1Omc': [{
                facilities_assets : 'Base Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Divisional Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Rural Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Central Dispensary',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'PMCUs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'PHCCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'MCHCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPubPnLmh': [{
                facilities_assets : 'Teaching Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Provincial General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'District General Hospitals',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPubPnMoh': [{
                facilities_assets : 'Offices',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPubPnOmc': [{
                facilities_assets : 'Base Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Divisional Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Rural Hospital',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Central Dispensary',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'PMCUs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'PHCCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'MCHCs',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'GRAND TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPvtP1': [{
                facilities_assets : 'Private Clinics',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnPvtPn': [{
                facilities_assets : 'Private Clinics',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Others',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'Total',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                },{
                facilities_assets : 'TOTAL',
                total_num_affected :null,
                male :null,
                female :null,
                total_damages:null,
                losses_y1 :null,
                losses_y2 :null,
                total_losses :null,
                }],
                'DsnTdlOwship': [{
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
                }]
        }
    }

$scope.filterData = function filterData(form)
{
$scope.submitted = true;
if(form.$valid){
    $http({
    method: "POST",
    url: "/reports/dl_fetch_report_data",
    data: angular.toJson({'table_name': 'Table_10', 'com_data': {'incident': $scope.incident} }),
    }).success(function(data) {

    console.log(data);
    $scope.dlHsNational = data;
    })
}
}

 }])

