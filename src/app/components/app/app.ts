import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {UsersActions} from '../users-actions/users-actions';
import {Contacts} from '../contacts/contacts';
import {Posts} from '../posts/posts';
import {RestService} from '../../services/rest-service';
import {UsersService} from '../../services/users-service/users-service';
import {PostsService} from '../../services/posts-service/posts-service';
import {ROUTER_DIRECTIVES, RouteConfig, Router, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'app',
  directives: [UsersActions, ROUTER_DIRECTIVES, Contacts, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'app/components/app/app.html'
})
@RouteConfig([
  { path: '/contacts', component: Contacts, as: 'Contacts' },
  { path: '/users', component: UsersActions, as: 'UsersActions' },
  { path: '/posts', component: Posts, as: 'Posts' },
])

export class AppComponent {

}

bootstrap(AppComponent, [RestService, UsersService, PostsService, ROUTER_PROVIDERS, HTTP_PROVIDERS]);
