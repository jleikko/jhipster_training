 'use strict';

angular.module('jhipsterTrainingApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterTrainingApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterTrainingApp-params')});
                }
                return response;
            },
        };
    });