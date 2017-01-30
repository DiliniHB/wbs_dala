
var bsHealthStatusApp = angular.module('bsEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('BsEduFacilitiesController', function BsEduFacilitiesController($scope, $http) {

$scope.bsEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.is_valid_data = true;

var init_data = {
'education':{
'Table_1':{
'BefPubSchools':[
{
type_facilities: '1AB, 1C',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Type 2',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Type 3',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Pirivena',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Training institutes',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'NCOE, Traninig College',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'TC, CRC, RESC',
total_number: null,
avg_male: null,
avg_female: null,
}
],
'BefPubOffices':[
{
type_facilities: 'Ministry Offices',
total_number: null
},
{
type_facilities: 'Provinicial Offices',
total_number: null
},
{
type_facilities: 'Zonal Offices',
total_number: null
},
{
type_facilities: 'Divisional Offices',
total_number: null
},
{
type_facilities: 'NIE',
total_number: null
}
],
'BefPvt':[
{
type_facilities: 'Pre-school',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Primary School',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Secondary School',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'University',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'Technical Institutes',
total_number: null,
avg_male: null,
avg_female: null,
},
{
type_facilities: 'TOTAL',
total_number: null,
avg_male: null,
avg_female: null,
}
]
}
}
}

 $scope.items = [ { value: 1 }, { value: 2 }, { value: 5}, { value: 7}];

$scope.bsEduFacilities = init_data;

$scope.sum = function()
{

    var total=0;
    angular.forEach($scope.bsEduFacilities.education.Table_1.BefPubSchools , function(item){
        console.log(item['total_number']);
        if(item.total_number)
            total+= parseInt(item.total_number);
    });

    return total;

}

$scope.bsEduDataSubmit = function(form)
{
$scope.submitted = true;

if(form.$valid){
 $http({
    method: "POST",
    url: "/bs_save_data",
    data: angular.toJson({'table_data': ($scope.bsEduFacilities), 'com_data': {'district': $scope.district,
          'bs_date': $scope.bs_date}, 'is_edit': $scope.is_edit }),
    }).success(function(data) {

     $scope.bsEduDataSubmit = init_data;
     $scope.is_edit = false;

     if(data == 'False')
      $scope.is_valid_data = false;
     else
      $("#modal-container-239453").modal('show');

 })
 }

}

    $scope.insertAsset = function(table) {
        console.log($scope.bsEduFacilities.education.Table_1[table]);
        var new_row;
        if(table == 'BefPvt') {
            new_row = {
                type_facilities: '',
                total_number: null,
                avg_male: null,
                avg_female: null,
            }
        }
        $scope.bsEduFacilities.education.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'BefPvt') {
            $scope.bsEduFacilities.education.Table_1.BefPvt.splice(index, 1);
        }
    }

})
