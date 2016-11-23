(function() {
    'use strict';

    angular
        .module('app')
        .controller('GitHubProfilerController', GitHubProfilerController);

    GitHubProfilerController.$inject = ['$http'];

    function GitHubProfilerController($http) {
        var vm = this;
        vm.callGitHubApi = callGitHubApi;


        /////////////////////////////////

        /* @ngInject */
        function callGitHubApi() {
            $http
                .get('http://api.github.com/users/' + vm.username + '?access_token=3ef6f0230a8ce9cc4888a834009d46d313055be7')
                .then(function(response) {
                    vm.userinfo = response.data;
                if (vm.userinfo.hirable ==null) {
                    vm.userinfo.hirable = 'Not looking for work';
                    vm.color = 'text-danger';
                  } else {
                    vm.userinfo.hirable = 'Looking for a solid job';
                    vm.color = 'text-success';

                  }
                })
                .catch(function(error) {
                    alert('An error occured while downloading user info from GitHub');
                });
              // document.getElementById('hide').style.visibility = 'visible';
              // document.getElementById('hiden').style.visibility = 'visible';

        }
    }
})();
