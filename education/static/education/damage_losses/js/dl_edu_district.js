
var bsHealthStatusApp = angular.module('dlEduDistrictApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlEduDistrictController', function DlEduDistrictController($scope, $http) {

$scope.dlEduDistrict;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

var init_data = {
'education':{
'Table_5':{
'DedPub':[
{
facilities_assets: '1AB, 1C',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Type 2',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Type 3',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Pirivena',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Training Institutes',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'NCOE, Training Colleges',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'TC, CRC, RESC',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Ministry, Provincial, Zonal, Divisional Offices, NIE',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'TOTAL',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
}
],
'DedPvt':[
{
facilities_assets: 'Pre-schools',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Primary Schools',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Secondary Schools',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Universities',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'Technical Institutes',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
{
facilities_assets: 'TOTAL',
tot_num_affected: null,
nums_affected_male: null,
nums_affected_female: null,
tot_dmgs: null,
los_year1: null,
los_year2: null,
tot_los: null,
},
],
'DedTotDmgl':[
{
facilities_assets: 'Structure',
damages: null,
los_year1: null,
los_year2: null,
total: null
},
{
facilities_assets: 'Structure',
damages: null,
los_year1: null,
los_year2: null,
total: null
},
{
facilities_assets: 'Structure',
damages: null,
los_year1: null,
los_year2: null,
total: null
},

]
}
}
}

$scope.dlEduDistrict = init_data;

})
