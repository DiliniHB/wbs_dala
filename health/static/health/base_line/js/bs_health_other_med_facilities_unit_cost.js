var app = angular.module('bsOtherMedFacilitiesUnitCostApp', []);

app.controller("BsOtherMedFacilitiesUnitCostController", ['$scope','$http',function ($scope, $http) {

    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.submitted = false;


    var init_data = {
        'Table_4': {
            'BucOmarStructure': [{
                particulars: '1 Floor Structure',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: '2-3 Floors Structure',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'More Than 3 Floors Structure',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarSupplies': [{
                particulars: 'Medicine',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Medical Supplies',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Others',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarMequipment': [{
                particulars: 'CT Scan',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'X-ray Machine',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'MRI Machine',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Other Equipment (Specify)',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarOassets': [{
                particulars: 'Computers',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Vehicles',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Furniture',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Office Equipment',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Others',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarcCrpm': [{
                particulars: 'Average Construction Period',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Average Repair Period',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarcStructure': [{
                particulars: 'Roof',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Wall',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Flooring',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
               'BucOmarcMequipment': [{
                particulars: 'CT Scan',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'X-ray Machine',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'MRI Machine',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Other Equipment (Specify)',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }],
            'BucOmarcOassets': [{
                particulars: 'Computers',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Vehicles',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }, {
                particulars: 'Furniture',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Office Equipment',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            },{
                particulars: 'Others',
                base_hospital: null,
                divisional_hospital: null,
                rural_hospital: null,
                central_dispensary:null,
                pri_med_cunits:null,
                pri_health_ccenters:null,
                mat_child_health_clinics:null,
            }]
        }
    }

    $scope.bsDataOtherMedicalFacilities = init_data;

     $scope.saveBsData = function(form) {
      $scope.submitted = true;
       if(form.$valid){

        $http({
            method: 'POST',
            url: '/base_line/bs_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.bsDataOtherMedicalFacilities,
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.baselineDate,

                },
                'is_edit': $scope.is_edit
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


    $scope.bsHsDataEdit = function(form)
{

   $scope.is_edit = true;
   $scope.submitted = true;

    if(form.$valid){

    $http({
    method: "POST",
    url: "/base_line/bs_fetch_edit_data",
    data: angular.toJson({
    'table_name': 'Table_4',
    'com_data': {
           'district': $scope.district,
           'bs_date': $scope.baselineDate,
          } }),
    }).success(function(data) {

    console.log(data);
    $scope.bsDataOtherMedicalFacilities = data;
    })
    }


}


    $scope.cancelEdit = function()
{
     $scope.is_edit = false;
     $scope.bsDataOtherMedicalFacilities = init_data;
}



}])
