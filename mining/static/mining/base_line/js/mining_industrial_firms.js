var app = angular.module('mnIndusMinFirmApp', ['underscore']);

app.controller("MnIndusMinFirmController", function($scope, $http, _) {


    $scope.district;
    $scope.baselineDate;
    $scope.is_edit = false;
    $scope.selectedFirm;
    $scope.ownership;

    var init_data = {
    'mining':{
        'Table_1': {

        'BmaImFirmNum':[{
                male :null,
                female :null,
                firm_id:$scope.selectedFirm,
                ownership :$scope.ownership,

        }],
            'BmaImFn': [{
                name_min_outputs:'Nickel',
                male: null,
                female: null,
                avg_per_year: null,
                firm_id:$scope.selectedFirm,
                ownership :$scope.ownership,

            },{
                name_min_outputs:'Copper',
                male: null,
                female: null,
                avg_per_year: null,
                firm_id:$scope.selectedFirm,
                ownership :$scope.ownership,
            },
            {
                name_min_outputs: 'Gold',
                male: null,
                female: null,
                avg_per_year: null,
                firm_id:$scope.selectedFirm,
                ownership :$scope.ownership,
            }
           ]

           }
        }
    }

 $scope.mnIndusMinFirm = init_data;


$scope.getfirm = function getfirm(){

//$scope.selectedFirm;
  $http({
    method: "POST",
    url: "/mining/base_line/get_ownership_firm",
    data: angular.toJson({
    'firm_id':  $scope.selectedFirm,
     }),
    }).success(function(response) {

    $scope.ownership = response;

    });



}




 $scope.insertFirm = function(table)
{

    console.log($scope.mnIndusMinFirm.mining.Table_1[table]);
    var new_row;
 if(table == 'BmaImFn'){
    new_row = {
    name_min_outputs:'',
    public: null,
    private: null,
    male: null,
    female: null,
    avg_per_year:null

    }
    }


    $scope.mnIndusMinFirm.mining.Table_1[table].push(new_row);

}
$scope.removeItem = function removeItem(table, index)
{
if(table == 'BmaImFn'){
    $scope.mnIndusMinFirm.mining.Table_1.BmaImFn.splice(index,1);
}
}

      $scope.saveBsData = function(form) {

      $scope.submitted = true;

//      $scope.mnIndusMinFirm.mining.Table_1.BmaImFn.firm_id = $scope.selectedFirm;

      var array = $scope.mnIndusMinFirm.mining.Table_1.BmaImFn;
      var details = _.map(array,function(obj){
       obj.firm_id = $scope.selectedFirm;
       obj.ownership = $scope.ownership;
       });

      var newarray= $scope.mnIndusMinFirm.mining.Table_1.BmaImFirmNum;
      var newdetails = _.map(newarray,function(newobj){
       newobj.firm_id = $scope.selectedFirm;
       newobj.ownership = $scope.ownership;


    });



      console.log($scope.mnIndusMinFirm);

       if(form.$valid){

        $http({
            method: 'POST',
            url: '/bs_save_data',
            contentType: 'application/json; charset=utf-8',
            data: angular.toJson({
                'table_data': $scope.mnIndusMinFirm,
                'com_data': {
                    'district': $scope.district,
                    'bs_date': $scope.baselineDate,

                },
                'is_edit': $scope.is_edit
            }),
            dataType: 'json',
        }).then(function successCallback(response) {
	$("#modal-container-239453").modal('show');
            console.log(response);


        }, function errorCallback(response) {

            console.log(response);
        });
        }

    }



    $scope.bsHsDataEdit = function(form) {

        $scope.is_edit = true;
        $scope.submitted = true;

            $http({
                method: "POST",
                url: '/bs_mining_fetch_edit_data',
                data: angular.toJson({
                    'table_name': 'Table_1',
                    'sector': 'mining',
                    'com_data': {
                        'district': $scope.district,
                        'bs_date': $scope.baselineDate,
                        'firm' : $scope.selectedFirm,
                    }
                }),
            }).success(function(data) {

                console.log(data);
                $scope.mnIndusMinFirm = data;
            })



    }



    $scope.cancelEdit = function()
{
     $scope.is_edit = false;
     $scope.mnIndusMinFirm = init_data;
}



})
