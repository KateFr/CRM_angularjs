import angular from 'angular';
import {CustomerDetailsComponent} from './details.component';
export const detailsModule = angular
.module('app.contacts.details', [])
.component('customerDetails', new CustomerDetailsComponent());
