var app = angular.module('dlAssessmenProvinceApp', ['underscore']);

app.controller("dlAssessmenProvinceController", function ($scope,$http, _) {

    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];

    var init_data = {
        'other_govn_services': {
            'Table_4': {
                'DlaProvince': [{
                    asset_owship : '1 Floor Structure',
                    damages : null,
                    los_year1 : null,
                    los_year2 : null,
                    total : null,
                }]
            }
        }
    }

    $scope.dlAssessmenProvinceSys = init_data;

$scope.fetchDlData = function(){
    $http({
    method: "POST",
    url: '/dl_fetch_district_disagtn',
    data: angular.toJson({
    'table_name':  'Table_4',
    'sector': 'other_govn_services',
    'com_data': {
            'province': 1,
            'incident': 9,
          },
           }),
    }).success(function(data) {

    console.log('load ', data);



})
}

})


