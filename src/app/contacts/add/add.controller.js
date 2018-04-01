import { Customer } from "../model/customer";

export class AddContactController{
    model = new Customer();
    submitText = 'Add';
    title = 'Add customer';
    
    constructor(contactsService, $state) {
        this.contactsService = contactsService;
        this.$state = $state;
        }

     back= () => {
         this.$state.go('list');
     }; 

     onSubmit = () => {
        this.contactsService.add(this.model)
          .then((res) => {
            if (res.status === 200) {
              this.$state.go('list');
            }
          })
          .catch(err => {
            // ...
          })
      }
    
};