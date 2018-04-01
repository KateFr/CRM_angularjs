import {module} from 'angular';
import { ContactsComponent } from './contacts.component';
import {contactsListModule} from './list/list.module'
import { addContactModule } from './add/add.module';
import {routing} from './contacts.routing';
import {ContactsService} from './contacts.service';
import {editContactModule} from './edit/edit.module';
import {detailsModule} from './details/details.module';

export const contactsModule = module('app.contacts', [
    contactsListModule.name,
    addContactModule.name,
    editContactModule.name,
    detailsModule.name,
])
.component('contacts', new ContactsComponent())
.config(routing)
.service('contactsService', ContactsService)
.constant('API',{
    apiUrl:'https://wsb-frontend-project-angularjs.juszczak.io'});