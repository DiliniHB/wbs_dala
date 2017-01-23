var app = angular.module('mnDLArtisanalMinApp', ['underscore']);

app.controller("mnDLArtisanalMinController", function($scope, $http,$parse, _) {


    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.myTotal = 5;


    var init_data = {
        'mining': {
            'Table_4': {
                'DlaDmgStructures': [{
                        assets: "Tunnels",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                    },
                    {
                        assets: "Tunnels",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,

                    },


                ],
                'DlaDmgEquipment': [{
                        assets: "Tools",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,

                    },


                ],
                'DlaDmgMachinery': [{
                        assets: "Generators",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                    },
                    {
                        assets: "Total",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,

                    },


                ],
                 'DlaDmgStocks': [
                    {
                        assets: "Total",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                    },
                    {
                        assets: "GRAND TOTAL",
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,

                    },


                ],
                 'DlaLosPlos': [

                 {  type_los:"Nickel",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                 {  type_los:"Copper",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                  {  type_los:"Gold",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                   {  type_los:"Total",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                }

                ],
                 'DlaLosOlos': [

                 {  type_los:"Cleaning up of debris",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                 {  type_los:"Higher operating costs",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                  {  type_los:"Other unexpected expenses",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                   {  type_los:"Total",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                },
                 {  type_los:"GRAND TOTAL",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,
                }]

            }
        }
    }

    $scope.mnDLArtisanalMin = init_data;


    $scope.insertFirm = function(table) {

        console.log($scope.mnDLArtisanalMin.mining.Table_4[table]);
        var new_row;
        if (table == 'DlaDmgStructures') {
            new_row = {
                assets: "",
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }
        } else if (table == 'DlaDmgEquipment') {
            new_row = {
                assets: "",
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }
        } else if (table == 'DlaDmgMachinery') {
            new_row = {
                assets: "",
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        }
        else if (table == 'DlaDmgStocks') {
            new_row = {
                assets: "",
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        }

        else if(table == 'DlaLosPlos')
        {
         new_row = {
               type_los:"",
                avg_per_year:0,
                red_voutput_year1:0,
                red_voutput_year2:0,
                los_year1:0,
                los_year2:0,
                tot_losses:0,

            }

        }

        $scope.mnDLArtisanalMin.mining.Table_4[table].length;
        $scope.count = $scope.mnDLArtisanalMin.mining.Table_4[table].length - 1;
        $scope.mnDLArtisanalMin.mining.Table_4[table].splice($scope.count, 0, new_row)
    }
    $scope.removeItem = function removeItem(table, index) {
        if (table == 'DlaDmgStructures') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgStructures.splice(index, 1);
        } else if (table == 'DlaDmgEquipment') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgEquipment.splice(index, 1);
        } else if (table == 'DlaDmgMachinery') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgMachinery.splice(index, 1);
        }
        else if (table == 'DlaDmgStocks') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaDmgStocks.splice(index, 1);
        }
        else if (table == 'DlaLosPlos') {
            $scope.mnDLArtisanalMin.mining.Table_4.DlaLosPlos.splice(index, 1);
        }
    }

    $scope.changedValue = function getDlData(selectDistrict) {
        if($scope.incident && selectDistrict) {
            fetchDistricts();
        }
    }

    function fetchDistricts() {
        if ($scope.incident) {
            $http({
                method: "POST",
                url: '/fetch_incident_districts',
                data: angular.toJson({
                    'incident': $scope.incident
                }),
            }).success(function(data) {
                $scope.districts = data;
                $scope.district = "";
                console.log(data);

            })
        }
    }


    $scope.getlosses= function(model,property){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj[property];
       return cumulative;

    });


var the_string = model+'_'+property;
var model = $parse(the_string);
model.assign($scope, cumulative);


}

$scope.getColumnTotal= function(model){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var cumulative_two=0;
       var cumulative_total = 0;

       var sums = _.map(array,function(obj){
       cumulative += obj.rep_tot_dassets;
       cumulative_two += obj.repair_pdmg_assets;

       cumulative_total = cumulative + cumulative_two;

       return cumulative_total;


    });


    var the_string = model+'_total';
    var model = $parse(the_string);
     model.assign($scope, cumulative_total);

}



$scope.getLossesoneTotal= function(model,property){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj.red_voutput_year1 * obj.avg_per_year ;
       return cumulative;

    });


var the_string = 'test';
var model = $parse(the_string);
model.assign($scope, cumulative);


}
$scope.getLossestwoTotal= function(model,property){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj.red_voutput_year2 * obj.avg_per_year ;
       return cumulative;

    });


var the_string = 'second';
var model = $parse(the_string);
model.assign($scope, cumulative);


}


$scope.getLossesthreeTotal= function(model,property){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj.red_voutput_year2 * obj.avg_per_year + obj.red_voutput_year1 * obj.avg_per_year ;
       return cumulative;

    });


var the_string = 'three';
var model = $parse(the_string);
model.assign($scope, cumulative);


}


$scope.getlosses= function(model,property){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj[property];
       return cumulative;

    });


var the_string = model+'_'+property;
var model = $parse(the_string);
model.assign($scope, cumulative);


}


$scope.getlossesTotal= function(model,property,propertyTwo){

 var array = $scope.mnDLArtisanalMin.mining.Table_4[model];
       var cumulative = 0;
       var sums = _.map(array,function(obj){
       cumulative += obj.los_year1 + obj.los_year2;
       return cumulative;

    });


var the_string = 'final';
var model = $parse(the_string);
model.assign($scope, cumulative);


}


$scope.saveData = function(form) {
    $scope.submitted = true;
    console.log('hi');
    if(form.$valid) {
        $http({
            method : 'POST',
            url : '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.mnDLArtisanalMin,
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
                //if data sent to server side method unsuccessfull
                console.log(response);
        });
    }
}

//    $scope.showtype = function showtype(index) {
//        alert(index);
//    }

    //
    //
    //     $scope.saveBsData = function(form) {
    //      $scope.submitted = true;
    //
    //      console.log($scope.mnIndusMinFirm);
    //       if(form.$valid){
    //
    //        $http({
    //            method: 'POST',
    //            url: '/base_line/bs_save_data',
    //            contentType: 'application/json; charset=utf-8',
    //            data: angular.toJson({
    //                'table_data': $scope.mnIndusMinFirm,
    //                'com_data': {
    //                    'district': $scope.district,
    //                    'bs_date': $scope.baselineDate,
    //
    //                },
    //                'is_edit': $scope.is_edit
    //            }),
    //            dataType: 'json',
    //        }).then(function successCallback(response) {
    //	$("#modal-container-239453").modal('show');
    //            console.log(response);
    //
    //
    //        }, function errorCallback(response) {
    //
    //            console.log(response);
    //        });
    //        }
    //
    //    }
    //
    //
    //
    //    $scope.bsHsDataEdit = function(form)
    //{
    //
    //   $scope.is_edit = true;
    //   $scope.submitted = true;
    //
    //    if(form.$valid){
    //
    //    $http({
    //    method: "POST",
    //    url: "/base_line/bs_fetch_edit_data",
    //    data: angular.toJson({
    //    'table_name': 'Table_4',
    //    'com_data': {
    //           'district': $scope.district,
    //           'bs_date': $scope.baselineDate,
    //
    //          } }),
    //    }).success(function(data) {
    //
    //    console.log(data);
    //    $scope.mnIndusMinFirm = data;
    //    })
    //    }
    //
    //
    //}
    //
    //
    //    $scope.cancelEdit = function()
    //{
    //     $scope.is_edit = false;
    //     $scope.mnIndusMinFirm = init_data;
    //}



})
