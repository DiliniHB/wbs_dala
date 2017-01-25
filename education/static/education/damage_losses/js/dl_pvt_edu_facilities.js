
var bsHealthStatusApp = angular.module('dlPvtEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlPvtEduFacilitiesController', function DlPvtEduFacilitiesController($scope, $http) {

$scope.dlPvtEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

// declaring school name property
$scope.schoolName = null;
$scope.schoolType = null;
$scope.schools = [];
$scope.new_school = {id: null, name: null, district_id: null};

var init_data = {
'education':{
'Table_4':{
'DpefNaf':[
{
edu_facilities: 'Pre-school',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Primary School',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Secondary School',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'University',
num_edu_facilities: null,
male: null,
female: null
},
{
edu_facilities: 'Technical Institutes',
num_edu_facilities: null,
male: null,
female: null
}
],
'DpefBefPreSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefPrmSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefSecSchool':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefUnv':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
],
'DpefBefTechInst':[
{
asset: 'Structure',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Supplies and materials',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Equipment',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
{
asset: 'Total',
pre_school: null,
est_rep_cost: null,
est_repair_cost: null,
tot_damages: null,
est_los_year_1: null,
est_los_year_2: null,
tot_los: null
},
]
}
}
}

$scope.dlPvtEduFacilities = init_data;

// adding schools
$scope.addSchool = function()
{
    $http({
    method: "POST",
    url: "/add_entity",
    data: angular.toJson({
    'model_fields': $scope.new_school,
    'model': $scope.schoolType,
     }),
    }).success(function(data) {

        $("#modal-container-218029").modal('hide');
        $scope.new_school.id = data;
        if(data)
            $scope.schools[$scope.schoolType].push($scope.new_school);

    })
}

$scope.fetchSchools = function()
{
    $scope.new_school.district_id = $scope.district;

    $http({
    method: "POST",
    url: "/education/damage_losses/fetch_schools",
    data: angular.toJson({
    'district':  $scope.district,
    'schools': ['PreSchools', 'PrimarySchools', 'SecondarySchools', 'TechInstitutes', 'Universities']
     }),
    }).success(function(data) {

        $scope.schools = data;

    })
}

})
