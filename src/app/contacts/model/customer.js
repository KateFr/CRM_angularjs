import {v4 as uuid} from 'uuid';
export class Customer {
   // id;
    name='';
    company='';
    email= '';
    phone= '';
    date= 0;

    constructor(name, company, phone, email) {
       // this.id = uuid();
        this.name = name;
        this.company = company;
        this.email= email;
        this.phone = phone;
        this.date = Date.now();
    }
}