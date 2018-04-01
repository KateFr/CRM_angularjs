import angular from 'angular';
import {appModule} from './app/app.module';
import {Customer} from './app/contacts/model/customer';
angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name]);
});
