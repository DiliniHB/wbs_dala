
var bsHealthStatusApp = angular.module('bsHealthStatusApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('BsHealthStatusController', function BsHealthStatusController($scope, $http) {

$scope.district;
$scope.number1;
$scope.number2;
$scope.sum;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

var init_data = {
'Table_1':{
'BhsPlc':[
{
male: null,
female: null,
children: null,
elderly: null,
}
],
'BhsComDiseases':
[
{
com_disease: 'Diarrhea',
male: null,
female: null,
children: null,
elderly: null,
},
{
com_disease: 'Dengue',
male: null,
female: null,
children: null,
elderly: null,
}
]
,
'BhsVi':
[
{
vital_indicators: 'Under-5 Mortality Rate',
male: null,
female: null,
children: null,
elderly: null,
},
{
vital_indicators: 'Mortality Rate',
male: null,
female: null,
children: null,
elderly: null,
}
]
,
'BhsOi':
[
{
other_indicators: 'Crude Birth Rate',
unit_measure: null
},
{
other_indicators: 'Maternal Mortality Rate',
unit_measure: null
}
]
}
}

$scope.dataHealthStatus = init_data;

$scope.getSum = function()
{
alert($scope.sum);
}

$scope.hSDataSubmit = function(form)
{
$scope.submitted = true;

if(form.$valid){
 $http({
    method: "POST",
    url: "/base_line/bs_save_data",
    data: angular.toJson({'table_data': ($scope.dataHealthStatus), 'com_data': {'district': $scope.district,
          'bs_date': $scope.bs_date}, 'is_edit': $scope.is_edit }),
    }).success(function(data) {

     $scope.dataHealthStatus = init_data;
     $scope.is_edit = false;

     $("#modal-container-239453").modal('show');

 })
 }

}

$scope.insertDisease = function(table)
{
    console.log($scope.dataHealthStatus.Table_1[table]);
    var new_row;
    if(table == 'BhsOi'){
    new_row = {
    other_indicators: '',
    unit_measure: null
    }
    }
    else if(table == 'BhsComDiseases'){
    new_row = {
    com_disease: '',
    male: null,
    female: null,
    children: null,
    elderly: null,
    }
    }
    else if(table == 'BhsVi'){
    new_row = {
    vital_indicators: '',
    male: null,
    female: null,
    children: null,
    elderly: null,
    }
    }

    $scope.dataHealthStatus.Table_1[table].push(new_row);

}

$scope.bsHsDataEdit = function(form)
{
$scope.submitted = true;
 if(form.$valid){
   $scope.is_edit = true;
    $http({
    method: "POST",
    url: "/base_line/bs_fetch_edit_data",
    data: angular.toJson({'table_name': 'Table_1', 'com_data': {'district': $scope.district,
          'bs_date': $scope.bs_date} }),
    }).success(function(data) {

    console.log(data);
    $scope.dataHealthStatus = data;
    })
}

}

$scope.cancelEdit = function()
{
    $scope.is_edit = false;
    $scope.dataHealthStatus = init_data;
}

$scope.removeItem = function removeItem(table, index)
{
if(table == 'BhsComDiseases')
    $scope.dataHealthStatus.Table_1.BhsComDiseases.splice(index,1);
else if(table == 'BhsVi')
    $scope.dataHealthStatus.Table_1.BhsVi.splice(index,1);
else if(table == 'BhsOi')
    $scope.dataHealthStatus.Table_1.BhsOi.splice(index,1);
}


})
