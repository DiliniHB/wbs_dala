var app= angular.module('bsInfoforCostsOfAssetsOnTheDistrictApp', [])

app.controller('bsInfoforCostsOfAssetsOnTheDistrictController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.baselineDate;
    $scope.bs_data={};
    $scope.is_edit = false;

    $scope.submitted = false;

    //
    var init_data = {
        'Table_1': {
            'BcsStructure': [{
                asset : '1 floor structure',
                avg_rep_cost: null,
                avg_repair_cost_roof: null,
                avg_repair_cost_wall: null,
                avg_repair_cost_flooring: null,
            }, {
                asset : '2-3 floors structure',
                avg_rep_cost: null,
                avg_repair_cost_roof: null,
                avg_repair_cost_wall: null,
                avg_repair_cost_flooring: null,
            }, {
                asset : 'More than 3 floors',
                avg_rep_cost: null,
                avg_repair_cost_roof: null,
                avg_repair_cost_wall: null,
                avg_repair_cost_flooring: null,
            }],
            'BcsOfficeEquipment' : [{
                asset : 'Computers',
                avg_rep_cost : null,
                avg_repair_cost : null,
            }, {
                asset : 'Furniture',
                avg_rep_cost : null,
                avg_repair_cost : null,
            }],
            'BcsMachinery': [{
                asset : 'Vehicles',
                avg_rep_cost : null,
                avg_repair_cost : null,
            }, {
                asset : 'Generators',
                avg_rep_cost : null,
                avg_repair_cost : null,
            }, {
                asset : 'Elevators',
                avg_rep_cost : null,
                avg_repair_cost : null,
            }]
        }
    }

    $scope.bsCostsOfAssetsOnTheDistrict = init_data;

    $scope.insertAsset = function(table)
    {
        console.log($scope.bsCostsOfAssetsOnTheDistrict.Table_1[table]);
        var new_row;
        if(table == 'BcsOfficeEquipment') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }
        else if(table == 'BcsMachinery') {
            new_row = {
                asset : '',
                avg_rep_cost : null,
                avg_repair_cost : null,
                district_general_hospital : null,
            }
        }

        $scope.bsCostsOfAssetsOnTheDistrict.Table_1[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index)
    {
        if(table == 'BcsOfficeEquipment')
        {
            $scope.bsCostsOfAssetsOnTheDistrict.Table_1.BcsOfficeEquipment.splice(index,1);
        }
        else if(table == 'BcsMachinery')
        {
            $scope.bsCostsOfAssetsOnTheDistrict.Table_1.BcsMachinery.splice(index,1);
        }
    }


//    $scope.saveBucMarStructure = function(form) {
//        $scope.submitted = true;
//        if(form.$valid) {
//            console.log($scope.data);
//            $http({
//                method : 'POST',
//                url : '/base_line/bs_save_data',
//                contentType: 'application/json; charset=utf-8',
//                data: angular.toJson({
//                    'table_data': $scope.bsUnitCostMiniHealthSys,
//                    'com_data':{
//                        'district': $scope.district,
//                        'bs_date': $scope.baselineDate,
//                    },
//                    'is_edit': $scope.is_edit
//                }),
//                dataType: 'json',
//            }).then(function mySucces(response) {
//                //if data sent to server side method successfull
//                console.log(response);
//            }, function myError(response) {
//                //if data sent to server side method unsuccessfull
//                console.log(response);
//            });
//        }
//    }
//
//    $scope.blDataEdit = function(form){
//        $scope.is_edit = true;
//         $scope.submitted = true;
//        if(form.$valid) {
//        $http({
//            method: "POST",
//            url: '/base_line/bs_fetch_edit_data',
//            data: angular.toJson({
//                'table_name':  'Table_3',
//                'com_data': {
//                    'district': $scope.district,
//                    'bs_date': $scope.baselineDate,
//
//                },
////                'is_edit':$scope.is_edit
//            }),
//        }).success(function(data) {
//
//            console.log(data);
//
//            $scope.bsUnitCostMiniHealthSys = data;
//        })
//    }
//    }

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
