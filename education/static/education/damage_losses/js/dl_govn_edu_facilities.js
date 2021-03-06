var bsHealthStatusApp = angular.module('dlGovnEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle','underscore']);

bsHealthStatusApp.controller('DlGovnEduFacilitiesController', function DlGovnEduFacilitiesController($scope, $http, _) {

$scope.dlGovnEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.tot = null;
$scope.is_edit = false;
$scope.submitted = false;
$scope.bs_data = {};
$scope.tot = null;
$scope.DugNpdatSupplies_ab1_1c =null;
$scope.DugNdafSupplies_type_2 = null;
$scope.DugNdafSupplies_type_3 = null;
$scope.DugNdafSupplies_pirivena = null;
$scope.DugNdafSupplies_training_institutes = null;
$scope.DugNdafSupplies_training_colleges = null;
$scope.DugNdafSupplies_tc_crc_resc = null;
$scope.DugNdafSupplies_min_pzd_offices = null;
$scope.dugNdafTot = 0 ;
$scope.dugNdafSupTot = 0;
$scope.dugNdafEquTot = 0;
var total=0;


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

        if( $scope.incident && $scope.district){
            $scope.fetchDlData();

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

$scope.fetchDlData = function(){

    $http({
    method: "POST",
    url: '/bs_get_data_mock',
    data: angular.toJson({
    'table_name':  'Table_2',
    'sector': 'education',
    'db_tables': ['BugArcStructures','BugArcSupplies','BugArcEquipment','BugArpcStructures','BugArpcSupplies','BugArpcEquipment','BugAfr','BugCrp'],
    'com_data': {
            'district': $scope.district.district__id,
            'incident': $scope.incident,
          },
     }),
    }).success(function(data) {

     angular.forEach(data, function(value, key) {
         $scope.bs_data[key] = JSON.parse(value);
     });
     generateRefencedData();

     $scope.calTotal();

    })

}

function generateRefencedData(){
  data_array = ['BugArcSupplies', 'BugArcEquipment'];

  angular.forEach(data_array, function(value, key) {
    obj_array = $scope.bs_data[value];
    model_name = value;
    particular_value = null;

    if(model_name == 'BugArcSupplies')
    {
       dl_model1 = 'DugNdafSupplies';
       dl_model2 = 'DugNpdatSupplies';
       particular_value = 'Value of Destroyed Supplies and Materials';
    }
    else if(model_name == 'BugArcEquipment')
    {
       dl_model1 = 'DugNdafEquipment';
       dl_model2 = 'DugNpdatEquipment';
       particular_value = 'Value of Destroyed Equipment';
    }


    $scope.dlGovnEduFacilities.education.Table_3[dl_model1] = [];
    $scope.dlGovnEduFacilities.education.Table_3[dl_model2] = [];

    var obj = {
    particulars: particular_value,
    ab1_1c: null,
    type_2: null,
    type_3: null,
    pirivena: null,
    training_institutes: null,
    training_colleges: null,
    tc_crc_resc: null,
    min_pzd_offices: null,
    total: null
    };

    console.log($scope.dlGovnEduFacilities.education.Table_3);

    angular.forEach(obj_array, function(value, key) {
    var obj1 = {
                particulars: value.fields.particulars,
                ab1_1c: null,
                type_2: null,
                type_3: null,
                pirivena: null,
                training_institutes: null,
                training_colleges: null,
                tc_crc_resc: null,
                min_pzd_offices: null,
                total: null
              };

     var obj2 = {
                particulars: value.fields.particulars,
                ab1_1c: null,
                type_2: null,
                type_3: null,
                pirivena: null,
                training_institutes: null,
                training_colleges: null,
                tc_crc_resc: null,
                min_pzd_offices: null,
                total: null
              };

    if(model_name == 'BugArcSupplies')
    {
       $scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj1);
       $scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj2);
    }
    else if(model_name == 'BugArcEquipment')
    {
       $scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj1);
       $scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj2);
    }


    });

    $scope.dlGovnEduFacilities.education.Table_3[dl_model1].push(obj);
    $scope.dlGovnEduFacilities.education.Table_3[dl_model2].push(obj);

  });

}

$scope.calTotal = function(model,property)
{
    var obj_array;
    total=0;

     if( model == 'DugNdafSupplies')
      {
        obj_array = $scope.bs_data.BugArcSupplies;

      }
      if( model == 'DugNdafEquipment')
      {
       obj_array = $scope.bs_data.BugArcEquipment;

      }
      if(model == 'DugNpdatSupplies'){


     obj_array = $scope.bs_data.BugArpcSupplies;

      }
      if(model == 'DugNpdatEquipment'){

      obj_array = $scope.bs_data.BugArpcEquipment;

      }

    angular.forEach(obj_array, function(value, key) {


    total = total + ($scope.dlGovnEduFacilities.education.Table_3[model][key][property] * value.fields[property]);

    })

    return total;

}

//$scope.calculateFinalTot = function(){
//console.log(total);
//$scope.dugNdafSupTot = total;
//return $scope.dugNdafSupTot ;
//
//}

$scope.getTotal =function (value){

$scope.dugNdafTot = $scope.dugNdafTot + value.total;
console.log($scope.dugNdafTot);
}

$scope.getGrandTot = function (property){

var strucLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure.length;
var suppLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies.length;
var equLength = $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment.length;

var ab1_1c= $scope.dlGovnEduFacilities.education.Table_3.DugNdafStructure[strucLength -1].ab1_1c +
            $scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies[suppLength -1].ab1_1c +
            $scope.dlGovnEduFacilities.education.Table_3.DugNdafEquipment[equLength -1].ab1_1c

console.log($scope.dlGovnEduFacilities.education.Table_3.DugNdafSupplies[suppLength -1]);
return ab1_1c;


}

})


