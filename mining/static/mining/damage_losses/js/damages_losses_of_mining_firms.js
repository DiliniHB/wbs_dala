var app = angular.module('dmLosOfMinFirmsApp', ['underscore']);

app.controller("DmLosOfMinFirmsAppController", function($scope, $http, $parse, _) {


    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data = {};
    $scope.submitted = false;
    $scope.sRepTotDassets;
    $scope.sTotDamages;
    $scope.sRepairPdmgAssets;
    $scope.Districts = [];
    $scope.firm_id;
    $scope.ownership;

    var init_data = {
        'mining': {
            'Table_3': {
                'DloNumEmps': [{
                    male: 0,
                    female: 0,
                    firm_id: 0,


                }],
                'DloDmgStructures': [{
                        assets: 'Tunnels',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Office buildings',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },

                ],
                'DloDmgEquipment': [{
                        assets: 'Loaders',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Computers',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }

                ],
                'DloDmgMachinery': [{
                        assets: 'Generators',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Total',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }

                ],
                'DloDmgVehicles': [{
                        assets: 'Trucks',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    },
                    {
                        assets: 'Cars',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }, {
                        assets: 'Total',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }

                ],
                'DloDmgStocks': [{
                        assets: 'Total',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }, {
                        assets: 'GRAND TOTAL',
                        rep_tot_dassets: 0,
                        repair_pdmg_assets: 0,
                        tot_damages: 0,
                        firm_id: 0,

                    }

                ],
                'DloLosPlos': [{
                        type_los: 'Nickel',
                        avg_per_year: 0,
                        red_voutput_year1: 0,
                        red_voutput_year2: 0,
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    },
                    {
                        type_los: 'Copper',
                        avg_per_year: 0,
                        red_voutput_year1: 0,
                        red_voutput_year2: 0,
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    },

                    {
                        type_los: 'Gold',
                        avg_per_year: 0,
                        red_voutput_year1: 0,
                        red_voutput_year2: 0,
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    },

                    {
                        type_los: 'Total',
                        avg_per_year: 0,
                        red_voutput_year1: 0,
                        red_voutput_year2: 0,
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    }


                ],
                'DloLosOlos': [{
                        type_los: 'Cleaning up of debris',
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    },
                    {
                        type_los: 'Higher operating costs',
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,


                    }, {
                        type_los: 'Other unexpected expenses',
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,


                    },
                    {
                        type_los: 'Total',
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    },
                    {
                        type_los: 'GRAND TOTAL',
                        los_year1: 0,
                        los_year2: 0,
                        tot_losses: 0,
                        firm_id: 0,

                    }
                ]




            }
        }
    }

    $scope.dmLosOfMinFirms = init_data;


    $scope.getTotal = function(model, property) {

        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
        var cumulative = 0;
        var sums = _.map(array, function(obj) {
            cumulative += obj[property];
            return cumulative;

        });


        var the_string = model + '_' + property;
        var model = $parse(the_string);
        model.assign($scope, cumulative);


    }



    $scope.getColumnTotal = function(model) {

        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
        var cumulative = 0;
        var cumulative_two = 0;
        var cumulative_total = 0;

        var sums = _.map(array, function(obj) {
            cumulative += obj.rep_tot_dassets;
            cumulative_two += obj.repair_pdmg_assets;

            cumulative_total = cumulative + cumulative_two;

            return cumulative_total;


        });


        var the_string = model + '_total';
        var model = $parse(the_string);
        model.assign($scope, cumulative_total);

    }

    $scope.getLossesTotal = function(model) {

        var array = $scope.dmLosOfMinFirms.mining.Table_3[model];
        var cumulative = 0;
        var cumulative_two = 0;
        var cumulative_total = 0;

        var sums = _.map(array, function(obj) {
            cumulative += obj.los_year1;
            cumulative_two += obj.los_year2;

            cumulative_total = cumulative + cumulative_two;

            return cumulative_total;


        });


        var the_string = model + '_total';
        var model = $parse(the_string);
        model.assign($scope, cumulative_total);

    }

    $scope.insertFirm = function(table) {

        console.log($scope.dmLosOfMinFirms.mining.Table_3[table]);
        var new_row;
        if (table == 'DloDmgStructures') {
            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }
        } else if (table == 'DloDmgEquipment') {
            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }
        } else if (table == 'DloDmgMachinery') {

            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        } else if (table == 'DloDmgVehicles') {

            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        } else if (table == 'DloDmgStocks') {

            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        } else if (table == 'DloLosPlos') {

            new_row = {
                assets: '',
                rep_tot_dassets: 0,
                repair_pdmg_assets: 0,
                tot_damages: 0,

            }

        }



        $scope.dmLosOfMinFirms.mining.Table_3[table].length;
        $scope.count = $scope.dmLosOfMinFirms.mining.Table_3[table].length - 1;
        $scope.dmLosOfMinFirms.mining.Table_3[table].splice($scope.count, 0, new_row)
    }


    $scope.removeItem = function removeItem(table, index) {
        if (table == 'DloDmgStructures') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgStructures.splice(index, 1);
        } else if (table == 'DloDmgEquipment') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgEquipment.splice(index, 1);
        } else if (table == 'DloDmgMachinery') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgMachinery.splice(index, 1);
        } else if (table == 'DloDmgVehicles') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgVehicles.splice(index, 1);
        } else if (table == 'DloDmgStocks') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloDmgStocks.splice(index, 1);
        } else if (table == 'DloLosPlos') {
            $scope.dmLosOfMinFirms.mining.Table_3.DloLosPlos.splice(index, 1);
        }
    }


    $scope.changedValueFirm = function getOwnership() {

        console.log($scope.firm);
        $http({
            method: "POST",
            url: "/mining/base_line/get_ownership_firm",
            data: angular.toJson({
                'firm_id': $scope.firm,
            }),
        }).success(function(response) {
            $scope.ownership = response;
        });
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

    $scope.saveDlData = function(form) {

        var array = $scope.dmLosOfMinFirms.mining.Table_3;
        var details = _.map(array, function(model_array) {
              _.map(model_array, function(model) {
                  model.firm_id = $scope.firm;


              });

        });

        console.log('firm ', $scope.dmLosOfMinFirms.mining.Table_3);

//        var newarray = $scope.dmLosOfMinFirms.mining.Table_3.DloDmgStructures;
//        var newdetails = _.map(newarray, function(newobj) {
//            newobj.firm_id = $scope.firm;
//            newobj.ownership = $scope.ownership;
//        });

        $scope.submitted = true;

        $http({
            method: 'POST',
            url: '/dl_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.dmLosOfMinFirms,
                'com_data': {
                    'district': $scope.district.district__id,
                    'incident': $scope.incident,

                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).then(function successCallback(response) {

            if (response.data == 'False')
                $scope.is_valid_data = false;
            else
                $("#modal-container-239453").modal('show');

        }, function errorCallback(response) {

            console.log(response);
        });
    }
})
