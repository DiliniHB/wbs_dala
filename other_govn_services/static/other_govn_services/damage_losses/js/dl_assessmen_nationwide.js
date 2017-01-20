var app = angular.module('dlNationwideApp', ['underscore']);

app.controller("dlNationwideController", function ($scope,$http, _) {
    $scope.district;
    $scope.incident;
    $scope.bs_data={};
    $scope.dl_data={};
    $scope.is_edit = false;
    $scope.submitted = false;
    $scope.Districts=[];

    var init_data = {
        'other_govn_services': {
            'Table_5': {
                'DlaOagenciesNatn': [{
                    asset_owship : '',
                    damages : null,
                    los_year1 : null,
                    los_year2 : null,
                    total : null,
                }]
            }
        }
    }

    $scope.dlNationwideSys = init_data;
})


