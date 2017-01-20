
var bsHealthStatusApp = angular.module('dlGovnEduFacilitiesApp', ['ui.bootstrap', 'popoverToggle']);

bsHealthStatusApp.controller('DlGovnEduFacilitiesController', function DlGovnEduFacilitiesController($scope, $http) {

$scope.dlGovnEduFacilities;
$scope.total;
$scope.iter_tot;
$scope.district;
$scope.bs_date;
$scope.is_edit = false;
$scope.submitted = false;

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

})
