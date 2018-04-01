import {v4 as uuid} from 'uuid';
export class ContactsService {
    
    

    constructor($http) {
        this.$http = $http
      
      }
    

    getHeaders = () => ({
        'Content-Type': 'application/json',
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        'Access-Control-Allow-Origin': '*',
        'X-User-ID': 'kasiaf'
      });
    
      add = (customer) => {
        return fetch('https://wsb-frontend-project-angularjs.juszczak.io' + '/add', {
          headers: this.getHeaders(),
          method: 'POST',
          body: JSON.stringify({ customer: customer }),
        })
      }
    
      getList = () => {
        return fetch('https://wsb-frontend-project-angularjs.juszczak.io' + '/customers', {
          headers: this.getHeaders(),
          method: 'GET',
        });
      }
    
      getDetails = (id) => {
        return fetch('https://wsb-frontend-project-angularjs.juszczak.io' + '/customer/' + id, {
          headers: this.getHeaders(),
          method: 'GET',
        })
      }
    
      edit = (customer) => {
        return fetch('https://wsb-frontend-project-angularjs.juszczak.io' + '/update/' + customer.id, {
          method: 'PUT',
          headers: this.getHeaders(),
          body: JSON.stringify({ customer: customer }),
        });
      }
    
      delete = (id) => {
        return fetch('https://wsb-frontend-project-angularjs.juszczak.io' + '/delete/' + id, {
          method: 'DELETE',
          headers: this.getHeaders(),
        });
      }
    


};