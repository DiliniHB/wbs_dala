var app= angular.module('unitCostMiniHealthSysApp', [])

app.controller('unitCostMiniHealthSysController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;

    var init_data = {
        'Table_3': {
            'BucMarStructure': [{
                particulars : '1 Floor Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : '2-3 Floors Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'More Than 3 Floors Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }],
            'BucMarSupplies': [{
                particulars : 'Medicines',
                teaching_hospital: 0,
                provincial_general_hospital: 0,
                district_general_hospital: 0,
            }, {
                particulars : 'Medical Supplies',
                teaching_hospital: 0,
                provincial_general_hospital: 0,
                district_general_hospital: 0,
            }, {
                particulars : 'Others',
                teaching_hospital: 0,
                provincial_general_hospital: 0,
                district_general_hospital: 0,
            }],
            'BucMarMequipment' : [{
                particulars : 'CT Scan',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'X-ray Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'MRI Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'Other Equipment (Specify)',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }],
            'BucMarOassets' : [{
                particulars : 'Computers',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Vehicles',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Furniture',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Office Equipment',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Others',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }],
            //----
            'BucMarcStructures': [{
                particulars : 'Roof',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Wall',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Flooring',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }],
            'BucMarcMequipment' : [{
                particulars : 'CT Scan',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'X-ray Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'MRI Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
            }, {
                particulars : 'Other Equipment (Specify)',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
             }],
            'BucMarcOassets' : [{
                particulars : 'Computers',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Vehicles',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Furniture',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Office Equipment',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Others',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
            }],
            'BucMarcCrpm': [{
                particulars : 'Average Construction Period',
                teaching_hospital: 0,
                provincial_general_hospital: 0,
                district_general_hospital: 0,
                office : 0,
                other : 0,
            }, {
                particulars : 'Average Repair Period',
                teaching_hospital: 0,
                provincial_general_hospital: 0,
                district_general_hospital: 0,
                office : 0,
                other : 0,
            }]
        }
    }

    $scope.bsUnitCostMiniHealthSys = init_data;

    $scope.saveBucMarStructure = function(form) {
         $scope.submitted = true;
        if(form.$valid) {
            console.log($scope.data);
            $http({
                method : 'POST',
                url : '/base_line/bs_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.bsUnitCostMiniHealthSys,
                    'com_data':{
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function mySucces(response) {
                //if data sent to server side method successfull
                console.log(response);
                }, function myError(response) {
                    //if data sent to server side method unsuccessfull
                    console.log(response);
            });
        }
    }

    $scope.blDataEdit = function(form){
        $scope.is_edit = true;
         $scope.submitted = true;
        if(form.$valid) {
        $http({
            method: "POST",
            url: '/base_line/bs_fetch_edit_data',
            data: angular.toJson({
                'table_name':  'Table_3',
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.baselineDate,

                },
//                'is_edit':$scope.is_edit
            }),
        }).success(function(data) {

            console.log(data);

            $scope.bsUnitCostMiniHealthSys = data;
        })
    }
    }

//
//    $scope.cancelEdit = function() {
//         $scope.is_edit = false;
//         $scope.bsUnitCostMiniHealthSys = init_data;
//            dataType: 'json',
//        }).then(function mySucces(response) {
//
//            //if data sent to server side method successfull
//	$("#modal-container-239453").modal('show');
//            console.log(response);
//
//            }, function myError(response) {
//                //if data sent to server side method unsuccessfull
//                console.log(response);
//        });
//    }

    // get relevant base-line data for calculations
//    function getBsData()
//    {
//        $http({
//        method: 'POST',
//        url: '/base_line/bs_get_data',
//        contentType: 'application/json; charset=utf-8',
//        data: angular.toJson({
//            'db_tables': ['BucOmarStructure', 'BhsComDiseases'],
//        }),
//        dataType: 'json',
//        }).then(function successCallback(response) {
//            // for calculations base_hospital - row wise , particulars = 1 Floor Structure column wise
//            var data = response.data;
//            angular.forEach(data, function(value, key) {
//              $scope.bs_data[key] = JSON.parse(value);
//            });
//
//            console.log($scope.bs_data);
//
//        }, function errorCallback(response) {
//
//            console.log(response);
//        });
//    }


//    $scope.init = function init()
//    {
//      getBsData();
//    }
}])
