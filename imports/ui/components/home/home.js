import {Meteor} from 'meteor/meteor';

import templateUrl from './home.html';
import {Steps} from '../../../api/steps/index.js';

class Home {
    constructor($scope) {
        $scope.viewModel(this);
        (function ($) {
            $(function () {
                $('.parallax').parallax();
            }); // end of document ready
        })(jQuery); // end of jQuery name space

        this.subscribe('steps');

        this.helpers({
            steps() {
                return Steps.find({},{
                    sort: {
                        date: -1
                    }
                });
            }
        });
    }
    removeLog(log) {
        Steps.remove(log._id);
    }
}
const name = 'home';
// create a module
export default angular.module(name, [
])
    .component(name, {
        templateUrl,
        controller: ['$scope',Home]
    })
    .config(['$stateProvider', config]);

function config($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>',
            resolve: {
                error: ['$q', function currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }]
            }
        });
}