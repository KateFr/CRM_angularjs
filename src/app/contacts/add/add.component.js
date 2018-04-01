import {AddContactController} from './add.controller';
import './add.scss';
import template from './add.html';
export class AddContactComponent {
    template =template;
    controllerAs ='add';
    controller= AddContactController;
}