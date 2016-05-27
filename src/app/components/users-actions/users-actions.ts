import {Component, bootstrap, OnInit} from 'angular2/angular2';
import {UsersInput} from '../users-input/users-input';
import {UsersList} from '../users-list/users-list';
import {SearchBox} from '../search-box/search-box';
import {Clicker} from '../clicker/clicker';
import {AgeSelector} from '../age-selector/age-selector';
import {RestService} from '../../services/rest-service';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Component({
  selector: 'users-actions',
  providers: [FORM_PROVIDERS],
  directives: [UsersInput, UsersList, AgeSelector, SearchBox, Clicker, ROUTER_DIRECTIVES],
  templateUrl: 'app/components/users-actions/users-actions.html'
})

export class UsersActions implements OnInit {
  value = 0;
  onInit;
  onUpdate = function(event) {
    this.value = event.value;
  }
}
