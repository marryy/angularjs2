import {Injectable} from 'angular2/angular2';
import {Http, Response, HTTP_PROVIDERS, HTTP_BINDINGS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostsService{
  posts;
  comments;
  root = "http://jsonplaceholder.typicode.com";


  constructor(private http:Http) {

      this.posts = this.http.get(this.root + '/posts').map((response) => response.json())
}



}
