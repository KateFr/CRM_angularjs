import { AddContactController } from '../add/add.controller';
export class EditContactController extends AddContactController {
    submitText = 'Edit';
    title = 'Edit customer';

    constructor(contactsService, $state, $stateParams, $scope, $mdToast) {
        super(contactsService, $state);
        this.$stateParams = $stateParams;
        this.$scope = $scope;
        this.model = {};
        this.$mdToast = $mdToast;
      
    }
    $onInit = () => {
        const id = this.$stateParams.id;
        this.contactsService.getDetails(id)
          .then(res => {
            res.json().then(data => {
              this.model = data.customer;
              // naprawia wyświetlanie modelu danych
              this.$scope.$applyAsync();
            })
          });
      }
    
      onSubmit = () => {
        this.contactsService.edit(this.model)
          .then((res) => {
            if (res.status === 200) {
              this.$mdToast.show(
                $mdToast.simple()
                .textContent('Simple Toast!')
                .hideDelay(3000)
                );
             
              //this.$state.go('list');
            }
          })
         
      } 
      
      back= () => {
        this.$state.go('list');
    }; 


}