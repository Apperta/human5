angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.setGoals'
      2) Using $state.go programatically:
        $state.go('home.setGoals');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab5/page2
  */
  .state('home.setGoals', {
    url: '/page2/:index',
    views: {
      'tab1': {
        templateUrl: 'templates/goalsCtrl/setGoals.html',
        controller: 'goalsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/goalsCtrl/setGoals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('home.statistics', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/statisticCtrl/statistics.html',
        controller: 'statisticCtrl'
      }
    }
  })

  .state('home.profile', {
    url: '/page4',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'templates/settingCtrl/profile.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/regCtrl/login.html',
    controller: 'regCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/regCtrl/signup.html',
    controller: 'regCtrl'
  })

  .state('home.tH5', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/th5Ctrl/tH5.html',
        controller: 'th5Ctrl'
      }
    }
  })

  .state('home.performance', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/th5Ctrl/performance.html',
        controller: 'th5Ctrl'
      }
    }
  })

  .state('sWSW', {
    url: '/page10',
    templateUrl: 'templates/th5Ctrl/sWSW.html',
    controller: 'th5Ctrl'
  })

  .state('menu', {
    url: '/page11',
    templateUrl: 'templates/menu.html',
    controller: 'th5Ctrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.goals'
      2) Using $state.go programatically:
        $state.go('home.goals');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab5/page13
  */
  .state('home.goals', {
    url: '/page13',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/goalsCtrl/goals.html',
        controller: 'goalsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/goalsCtrl/goals.html',
        controller: 'goalsCtrl'
      }
    }
  })

  .state('home.settings', {
    url: '/page12',
    cache: false,
    views: {
      'tab3': {
        templateUrl: 'templates/settingCtrl/settings.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('home.wEMWBS', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/th5Ctrl/wEMWBS.html',
        controller: 'th5Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});