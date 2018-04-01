import { Customer } from "../model/customer";

export class ContactsListController {
  customers = [];

   constructor(contactsService, $state, $scope){   
       this.contactsService = contactsService;
       this.$state = $state;
       this.$scope = $scope;
   } 
   $onInit = () => {
    this.loading = true;
    this.contactsService.getList()
      .then(res => {
        res.json().then(data => {
          this.customers = data.customers;
          this.loading = false;
          this.$scope.$applyAsync();
        })
      })
  }

  showDetails = (id) => {
    this.$state.go('details', { id: id });
  }

  edit = customer => {
    console.log(customer)
    this.$state.go('edit', { id: customer.id })
  }

  delete = id => {
    const index = this.customers.map(a => a.id).indexOf(id);
    this.customers.splice(index, 1);

    this.contactsService.delete(id)
      .then(res => {
        console.log(res);
      })
  }
}