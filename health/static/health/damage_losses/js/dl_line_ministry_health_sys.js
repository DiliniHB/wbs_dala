var app = angular.module('dlInTheLineMinistryHealthSysApp', [])

app.controller('dlInTheLineMinistryHealthSysAppController', ['$scope', '$http', function($scope, $http) {
    $scope.district;
    $scope.selectedDistrict;
    $scope.incident;

    $scope.dlDate;
    $scope.bs_data={};

    $scope.baselineDate;

    $scope.is_edit = false;

    var init_data = {
        'Table_5': {
            'DmhDfNum' : [{
                num_des_facilities : 'Number of Destroyed Facilities',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
            'DmhDfPaf' : [{
                num_patients_affected : 'Male',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                num_patients_affected : 'Female',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
            //tab 2
            'DmhNdatFacStructure' : [{
                asset : '1 Floor Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : '2-3 Floors Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'More Than 3 Floors Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Value of Destroyed Structures',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            'DmhNdatFacSupplies' : [{
                asset : 'Medicines',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Medical Supplies',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Others',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Value of Destroyed Supplies',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }],
            'DmhNdatFacMequipment' : [{
                asset : 'CT Scan',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'X-ray Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'MRI Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Other Equipment (Specify)',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }],
            'DmhNdatFacOassets' : [{
                asset : 'Computers',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'Vehicles',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'Furniture',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'Office Equipment',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'Others',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'Value of Destroyed Other Assets',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            },{
                asset : 'VALUE OF DESTROYED ASSETS',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            //tab 3
            'DmhPdfaNum': [{
                num_des_facilities : 'Number of Destroyed Facilities',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            'DmhPdfaPaf' : [{
                num_patients_affected : 'Male',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                num_patients_affected : 'Female',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            //tab 4
            'DmhPdfaStructure': [{
                asset : 'Roof',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Wall',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Flooring',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Value of Partially Damaged Structure',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            'DmhPdfaMequipment' : [{
                asset : 'CT Scan',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'X-ray Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'MRI Machine',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Other Equipment (Specify)',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }, {
                asset : 'Value of Partially Damaged Medical Equipment',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                total : 0,
            }],
            'DmhPdfaOassets' : [{
                asset : 'Computers',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Vehicles',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Furniture',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Office Equipment',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Others',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'Value of Partially Damaged Other Assets',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'VALUE OF PARTIALLY DAMAGED ASSETS',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }, {
                asset : 'GRAND TOTAL OF DAMAGES',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0,
            }],
            //tab 5
            'DmhLosFi' : [{
                type_of_losses : 'Disaster Year 1',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Year 2',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Total',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
            'DmhLosCud' : [{
                type_of_losses : 'Disaster Year 1',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Year 2',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Total',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
            'DmhLosHoc' : [{
                type_of_losses : 'Disaster Year 1',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Year 2',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Total',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
            'DmhLosOue' : [{
                type_of_losses : 'Disaster Year 1',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Year 2',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'Total',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }, {
                type_of_losses : 'TOTAL VALUE OF LOSSES',
                teaching_hospital : 0,
                provincial_general_hospital : 0,
                district_general_hospital : 0,
                office : 0,
                other : 0,
                total : 0
            }],
        }
    }

    $scope.dlMinistryHealthSys = init_data;

    $scope.saveBucMarStructure = function(form) {

        $scope.submitted = true;

       if(form.$valid){
        $http({
            method : 'POST',
            url : '/damage_losses/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlMinistryHealthSys,
                'com_data': {
                    'district': $scope.selectedDistrict,
                    'incident': $scope.incident,
                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).then(function mySucces(response) {
            //if data sent to server side method successfull
$("#modal-container-239453").modal('show');
            console.log(response);
            }, function myError(response) {
                //if data sent to server side method unsuccessfull
                console.log(response);
        });
        }
    }

    $scope.dlDataEdit = function(form){
         $scope.is_edit = true;
        $scope.submitted = true;

       if(form.$valid){
        $http({
            method: "POST",
            url: '/damage_losses/dl_fetch_edit_data',
            data: angular.toJson({
                'table_name':  'Table_5',
                'com_data': {
                    'district': $scope.selectedDistrict,
                    'incident': $scope.incident,

                },
            }),
        }).success(function(data) {

            $scope.dlMinistryHealthSys = data;
            console.log($scope.dlMinistryHealthSys.Table_5.DmhNdatFacStructure);
        })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dlHealthDamagelostPrivateSys = init_data;
    }

    // get relevant base-line data for calculations
    $scope.changedValue=function getBsData() {
        if($scope.incident) {
            $http({
                method: "POST",
                url: "/damage_losses/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }

        if($scope.selectedDistrict && $scope.incident) {
            $http({
                method: 'POST',
                url: '/base_line/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'db_tables': ['BucMarStructure', 'BucMarSupplies', 'BucMarMequipment', 'BucMarOassets', 'BhsComDiseases', 'BucMarcStructures', 'BucMarcCrpm', 'BucMarcMequipment', 'BucMarcOassets'],
                  'com_data': {
                        'district': $scope.selectedDistrict,
                        'incident': $scope.incident,
                        },
                   'table_name': 'Table_3'
                }),
                dataType: 'json',
            }).then(function successCallback(response) {
                var data = response.data;
                angular.forEach(data, function(value, key) {
                  $scope.bs_data[key] = JSON.parse(value);
                });

                console.log($scope.bs_data);

            }, function errorCallback(response) {

                console.log(response);
            });
        }
    }
}])
