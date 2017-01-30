
var bsHealthStatusApp = angular.module('dlGovnEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlGovnEduFacilitiesController', function DlGovnEduFacilitiesController($scope, $http) {

$scope.dlGovnEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.incident;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;
$scope.selectedValue;

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

    $scope.insertAsset = function(table) {
        console.log($scope.dlGovnEduFacilities.education.Table_3[table]);
        var new_row;
        if(table == 'DugNdafSupplies') {
            new_row = {
                particulars: '',
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
        }
        else if(table == 'DugNdafEquipment') {
            new_row = {
                particulars: '',
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
        }
        else if(table == 'DugNpdatSupplies') {
            new_row = {
                particulars: '',
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
        }
        else if(table == 'DugNpdatEquipment') {
            new_row = {
                particulars: '',
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
        }

        $scope.dlGovnEduFacilities.education.Table_3[table].push(new_row);
    }

    $scope.removeItem = function removeItem(table, index) {
        if(table == 'DugNdafSupplies') {
            $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies.splice(index, 1);
        }
        else if(table == 'DugNdafEquipment') {
            $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.splice(index, 1);
        }
        else if(table == 'DugNpdatSupplies') {
            $scope.dlGovnEduFacilities.education.Table_3.DugNpdatSupplies.splice(index, 1);
        }
        else if(table == 'DugNpdatEquipment') {
            $scope.dlGovnEduFacilities.education.Table_3.DugNpdatEquipment.splice(index, 1);
        }
    }

    $scope.changedValue=function getBsData(selectedValue) {
        if($scope.incident && selectedValue) {
            $http({
                method: "POST",
                url: "/fetch_incident_districts",
                data: angular.toJson({'incident': $scope.incident }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.selectedDistrict = "";
                console.log(data);
            })
        }
    }

    $scope.saveDlData = function(form) {
        alert('dis '+$scope.district.district__id+ '-ind '+$scope.incident);
        $scope.submitted = true;
        console.log($scope.dlGovnEduFacilities);
        if(form.$valid) {
            $http({
                method : 'POST',
                url : '/dl_save_data',
                contentType: 'application/json; charset=utf-8',
                data: angular.toJson({
                    'table_data': $scope.dlGovnEduFacilities,
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
                    'is_edit': $scope.is_edit
                }),
                dataType: 'json',
            }).then(function mySucces(response) {
                console.log(response);
                if(response.data == 'False')
                    $scope.is_valid_data = false;
                else
                    $("#modal-container-239453").modal('show');
                }, function myError(response) {
                    console.log(response);
            });
        }
    }

    $scope.dlDataEdit = function(form) {
        $scope.is_edit = true;
        $scope.submitted = true;

        if(form.$valid) {
            $http({
                method: "POST",
                url: '/dl_fetch_edit_data',
                data: angular.toJson({
                    'table_name':  'Table_3',
                    'sector':'education',
                    'com_data': {
                        'district': $scope.district.district__id,
                        'incident': $scope.incident,
                    },
               }),
            }).success(function(data) {
                console.log(data);
                $scope.dmLosOfMinFirms = data;
            })
        }
    }

    $scope.cancelEdit = function() {
         $scope.is_edit = false;
         $scope.dmLosOfMinFirms = init_data;
    }

})
