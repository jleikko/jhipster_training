'use strict';

angular.module('jhipsterTrainingApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
