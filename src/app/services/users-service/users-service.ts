import {Injectable} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UsersService{
  users;
  photos;
  root = "http://jsonplaceholder.typicode.com";

  constructor(private http:Http) {
    this.users = http.get(this.root + '/users').map((response) => response.json());
    this.photos = http.get(this.root + '/photos').map((response) => response.json());
  }
}
