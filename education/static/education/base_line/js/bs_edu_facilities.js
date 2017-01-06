
var bsHealthStatusApp = angular.module('bsEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('BsEduFacilitiesController', function BsEduFacilitiesController($scope, $http) {

$scope.bsEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

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
},
{
type_facilities: 'TOTAL',
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
type_facilities: 'Others',
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

$scope.bsEduFacilities = init_data;

})
