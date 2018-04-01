export class CustomeDetailsController {
    constructor(contactsService,  $state,$stateParams, $scope) {
      this.contactsService = contactsService;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.customer = {};
      this.$scope = $scope;
    }
  
    $onInit = () => {
      const id = this.$stateParams.id;
      this.contactsService.getDetails(id)
        .then(res => {
          res.json().then(data => {
            this.customer = data.customer;
            // naprawia wyświetlanie modelu danych
            this.$scope.$applyAsync();
          })
        });
    }

    edit = customer => {
      console.log(customer)
      this.$state.go('edit', { id: customer.id })
    }

    delete = id => { 
      this.contactsService.delete(id)
        .then(res => {
          if (res.status === 200) {
            this.$state.go('list');
          }
        })
    }
    //$onDestroy = () => { }
  }