
var bsHealthStatusApp = angular.module('dlEduProvinceApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduProvinceController', function DlEduProvinceController($scope, $http) {

$scope.dlEduProvince;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.data={};


    $scope.changedValue = function getDlData() {

        if ($scope.incident) {

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
    }

   $scope.LoadData = function(){
    $scope.is_edit = true;
   $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_6',
            'sector': 'education',
            'com_data': {
                    'province': $scope.province,
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            $scope.data=data;

            })


}

})
