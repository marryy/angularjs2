import {Component, Input, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RestService} from '../../services/rest-service';
import {UserRenderer} from '../user-renderer/user-renderer';
import {NameFilter} from '../../pipes/name-filter';
import {AgeFilter} from '../../pipes/age-filter';
import {UsersService} from '../../services/users-service/users-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'users-list',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, UserRenderer],
  pipes: [NameFilter, AgeFilter],
  templateUrl: 'app/components/users-list/users-list.html'
})

export class UsersList {
  greeting = "List of users:";
  onInit;

  @Input() userage: string;
  @Input() letter:string;

  users;
  constructor(private usersService: UsersService) {
  usersService.users
    .subscribe(
      users => this.users = users,
      error => console.error('Error: ' + error),
      () => console.log('Completed!')
    );
  }
}
