'use strict';
angular.module('phonecatFilters', []).
    filter('checkmark', function() {
            return function(input) {
                return input ? 'ok-circle' : 'remove-circle';
            }
        }
    );