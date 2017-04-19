angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) 
{
  $stateProvider
  
  .state('menu.setGoals', {
    url: '/page2/:index',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/goalsCtrl/setGoals.html',
        controller: 'goalsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/goalsCtrl/setGoals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('menu.statistics', {
    url: '/page3',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/statisticCtrl/statistics.html',
        controller: 'statisticCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/page4',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/settingCtrl/profile.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('home', {
    url: '/page1',
    cache: false,
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('login', 
  {
    url: '/page5',
    cache: false,
    templateUrl: 'templates/regCtrl/login.html',
    controller: 'regCtrl'    
  })

  .state('offLogin', 
  {
    url: '/page7',
    cache: false,
    templateUrl: 'templates/regCtrl/offLogin.html',
    controller: 'regCtrl'    
  })

  .state('signup', {
    url: '/page6',
    cache: false,
    templateUrl: 'templates/regCtrl/signup.html',
    controller: 'regCtrl'
  })

  .state('menu.tH5', {
    url: '/page8',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/th5Ctrl/tH5.html',
        controller: 'th5Ctrl'
      }
    }
  })

  .state('menu.performance', {
    url: '/page9',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/th5Ctrl/performance.html',
        controller: 'th5Ctrl'
      }
    }
  })

  .state('menu.sWSW', {
    url: '/page10',
    cache: false,
    views: {
      'side-menu21':{
        templateUrl: 'templates/th5Ctrl/sWSW.html',
        controller: 'th5Ctrl'
      }
    }
    
  })

  .state('menu.goals', {
    url: '/page13',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/goalsCtrl/goals.html',
        controller: 'goalsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/goalsCtrl/goals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/page12',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/settingCtrl/settings.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.wEMWBS', {
    url: '/page14',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/th5Ctrl/wEMWBS.html',
        controller: 'th5Ctrl'
      }
    }
  })

 .state('menu.theHumanFive', {
    url: '/page17',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/theHumanFive.html',
        controller: 'th5Ctrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    cache: false,
    templateUrl: 'templates/menu.html',
    controller: 'settingCtrl'
  })

  .state('menu.knowledgeBase', {
    url: '/page15',
    cache: false,
    views: {
      'side-menu21': {
        templateUrl: 'templates/knowledgeBase.html',
        controller: 'settingCtrl'
      }
    }
  })



$urlRouterProvider.otherwise('/page5')

  

});