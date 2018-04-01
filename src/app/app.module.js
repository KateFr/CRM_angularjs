import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import {AppComponent} from './app.component';
import {contactsModule} from './contacts/contacts.module';

const materialConfig = $mdThemingProvider => {
  $mdThemingProvider.definePalette('newPallete', {
    '50': 'e9eaea',
    '100': 'c8cacc',
    '200': 'a4a6aa',
    '300': '7f8287',
    '400': '63686e',
    '500': '484d54',
    '600': '41464d',
    '700': '383d43',
    '800': '30343a',
    '900': '212529',
    'A100': '78b0fb',
    'A200': '4693fa',
    'A400': '0e76ff',
    'A700': '0069f4',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      '300',
      'A100',
      'A200'
    ],
    'contrastLightColors': [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A400',
      'A700'
    ]
  });

  $mdThemingProvider.theme('default')
  .primaryPalette('newPallete')
  .accentPalette('orange')
  .warnPalette('red');
};

export const appModule = angular
  .module('app', [
    uiRouter,
    'ngMaterial',
    contactsModule.name,
  ])
  .component('app', new AppComponent())
  .config(materialConfig);

