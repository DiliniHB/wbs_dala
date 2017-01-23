var app = angular.module('dmLosOfMinFirmsDisApp', ['underscore']);

app.controller("DmLosOfMinFirmsDisController", function($scope,$http,$parse, _) {


    $scope.district;
    $scope.is_edit = false;
    $scope.incident;
    $scope.dl_data={};
    $scope.submitted = false;
    $scope.Districts=[];
    $scope.data;

    $scope.changedValue = function getDlData() {

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



    $scope.LoadData = function() {
        $scope.is_edit = true;
        $scope.submitted = true;
        $http({
            method: "POST",
            url: '/dl_fetch_edit_data',
            data: angular.toJson({
                'table_name':  'Table_5',
                'sector':'mining',
                'com_data': {
                    'district':  2,
                    'incident': $scope.incident,
                },
                'is_edit':$scope.is_edit
            }),
        }).success(function(data) {
            $scope.data=data;
        })
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
})
