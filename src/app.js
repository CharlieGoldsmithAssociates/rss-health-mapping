// import angular and ui-router
import angular from 'angular';
import uirouter from 'angular-ui-router';

// import highcharts and highcharts-ng var Highcharts = require('highcharts');
// require('highcharts/modules/exporting')(Highcharts); import 'highcharts-ng';
import 'angular-nvd3';

// import CSS, FA, and bootstrap
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// import NavBar and other components
import Components from './components';

// import config file and modules here
import routing from './app.config';
import indicators from './features/indicators';
import map from './features/map';
import facility from './features/facility';
import dashboard from './features/dashboard';
import table from './features/data-tables';
import pillars from './features/pillars';
import about from './features/about';

angular.module('app', [
  uirouter,
  map,
  facility,
  dashboard,
  table,
  pillars,
  indicators,
  Components,
  about,
  "nvd3"
])
// .directive('app', app) .controller('AppCtrl', AppCtrl)
  .config(routing)
  .filter('percentage', [
    '$filter',
    function ($filter) {
      return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
      };
    }
  ]);

// export default MODULE_NAME;