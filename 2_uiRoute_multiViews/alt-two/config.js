angular.module('ui-router-named-views.alt-two', ['ui.router']).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('app.alt-two', {
      url: '/alt-two',
      views: {
        'content@': { templateUrl: 'alt-two/alt-two.content.tpl.html' },
        'header@': { templateUrl: 'alt-two/alt-two.header.tpl.html' }
      }
    });
  }
]);
