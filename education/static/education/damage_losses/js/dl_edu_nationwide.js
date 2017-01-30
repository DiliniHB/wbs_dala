
var bsHealthStatusApp = angular.module('dlEduNationApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduNationController', function DlEduProvinceController($scope, $http) {

$scope.dlEduProvince;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.data={};
$scope.incident;


    $scope.changedValue = function getDlData() {

        $scope.incident;
    }

   $scope.LoadData = function(){

    $scope.is_edit = true;
    $scope.submitted = true;

            $http({
            method: "POST",
            url: '/dl_fetch_district_disagtn',
            data: angular.toJson({
            'table_name':  'Table_7',
            'sector': 'education',
            'com_data': {
                    'incident': $scope.incident,
                  },
                   }),
            }).success(function(data) {

            console.log('load ', data);
            $scope.data = data;

            })


}

})
