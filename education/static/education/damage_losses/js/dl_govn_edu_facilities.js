
var bsHealthStatusApp = angular.module('dlGovnEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle','underscore']);

bsHealthStatusApp.controller('DlGovnEduFacilitiesController', function DlGovnEduFacilitiesController($scope, $http , $parse , _) {

$scope.dlGovnEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.tot = null;
$scope.is_edit = false;
$scope.submitted = false;
$scope.bs_data={};
$scope.tot = null;
$scope.DugNpdatSupplies_ab1_1c =null;
$scope.DugNdafSupplies_type_2 = null;
$scope.DugNdafSupplies_type_3 = null;
$scope.DugNdafSupplies_pirivena = null;
$scope.DugNdafSupplies_training_institutes = null;
$scope.DugNdafSupplies_training_colleges = null;
$scope.DugNdafSupplies_tc_crc_resc = null;
$scope.DugNdafSupplies_min_pzd_offices = null;


var init_data = {
'education':{
'Table_3':{
'DugDfNdf':[
{
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugDfNsa':[
{
particulars: 'Male',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
total: null
},
{
particulars: 'Female',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
total: null
}
],
'DugNdafStructure':[
{
particulars: '1 floor structure',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: '2-3 floors structure',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'More than 3 floors structure',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Value of Destroyed Structures',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugNdafSupplies':[
{
particulars: 'Books',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Desks',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Chairs',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Boards',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Table',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Value of Destroyed Supplies and Materials',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugNdafEquipment':[
{
particulars: 'Computers',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Aesthetic Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Sports Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Science Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Value of Destroyed Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
],
'DugPdfaNpdf':[
{
particulars: 'Computers',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugPdfaNsa':[
{
particulars: 'Male',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Female',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugNpdatStructure':[
{
particulars: 'Roof',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Wall',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Flooring',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Value of Partially Damaged Structures',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugNpdatSupplies':[
{
particulars: 'Books',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Desks',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Chairs',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Boards',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Table',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Value of Partially Damaged Supplies and Materials',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugNpdatEquipment':[
{
particulars: 'Computers',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Aesthetic Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Sports Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Science Equipment',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugLosFi':[
{
particulars: 'Disaster Year 1',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Year 2',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Total',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugLosCud':[
{
particulars: 'Disaster Year 1',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Year 2',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Total',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugLosHoc':[
{
particulars: 'Disaster Year 1',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Year 2',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Total',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
'DugLosOue':[
{
particulars: 'Disaster Year 1',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Year 2',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
},
{
particulars: 'Total',
ab1_1c: null,
type_2: null,
type_3: null,
pirivena: null,
training_institutes: null,
training_colleges: null,
tc_crc_resc: null,
min_pzd_offices: null,
total: null
}
],
}
}
}

$scope.dlGovnEduFacilities = init_data;



$scope.changedValue=function getBsData(selectedValue) {

       console.log(selectedValue);

        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);
            })
        }

        if($scope.incident && $scope.district ) {
            $http({
                method: 'POST',
                url: '/bs_get_data_mock',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                  'sector':'education',
                  'db_tables': ['BugArcStructures','BugArcSupplies','BugArcEquipment','BugArpcStructures','BugArpcSupplies','BugArpcEquipment','BugAfr','BugCrp'],
                  'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                        },
                   'table_name': 'Table_2'
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

    $scope.saveDlData = function() {

    $scope.submitted = true;

        $http({
            method: 'POST',
            url:'/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dlGovnEduFacilities,
                'com_data': {
                    'district':  $scope.district.district__id,
                    'incident': $scope.incident,

                },
                'is_edit' : $scope.is_edit
            }),
            dataType: 'json',
        }).then(function successCallback(response) {

                 if(response.data == 'False')
             $scope.is_valid_data = false;
                else
             $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {

            console.log(response);
        });


    }

})
