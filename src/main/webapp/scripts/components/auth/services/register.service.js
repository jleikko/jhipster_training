'use strict';

angular.module('jhipsterTrainingApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


