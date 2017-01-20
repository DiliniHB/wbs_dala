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


    $scope.LoadData = function()
{

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

})
