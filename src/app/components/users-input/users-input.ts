import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RestService} from '../../services/rest-service';
import {UserModel} from '../user-model/user-model';

@Component({
  selector: 'users-input',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template:
    '<div>users list</br>\
      <form (submit)="onFormSubmit()">\
        Add user: <input type="text" [(ng-model)]="userModel.name">\
        <input type="submit" value="save">\
      </form>\
    </div>'
})

export class UsersInput{
  userModel: UserModel = new UserModel();

  constructor(public restService:RestService) {
  }

  onFormSubmit() {
    this.restService.addUser(this.userModel);
    this.userModel = new UserModel();
  }
}
