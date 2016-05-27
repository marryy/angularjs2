import {Injectable} from 'angular2/angular2';
import {UserModel} from '../components/user-model/user-model';
// import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';


@Injectable()
export class RestService{
  usrs;
  // constructor(private http:Http) { }

  root = "http://jsonplaceholder.typicode.com/posts";

  // getFoods() {
  //   return this.http.get(this.root).map((res:Response) => res.json());
  // }

  users = [
    new UserModel(1, 'Bobi', 'old'),
    new UserModel(2, 'Mara'),
    new UserModel(3, 'Nestor'),
    new UserModel(4, 'Strahil'),
    new UserModel(5, 'Hristo', 'old'),
    new UserModel(6, 'Kontantin', 'old'),
    new UserModel(7, 'Anelia'),
    new UserModel(8, 'Siika'),
    new UserModel(9, 'Silviq', 'old'),
    new UserModel(10, 'Severina', 'old'),
    new UserModel(11, 'Sasho'),
    new UserModel(12, 'Misho'),
    new UserModel(13, 'Stoqn', 'old'),
    new UserModel(14, 'Vlado', 'young'),
    new UserModel(15, 'Betty', 'old'),
    new UserModel(16, 'Emil', 'young')
  ];

  addUser(user: UserModel) {
    this.users = [...this.users, user];
  };

  getUsers() {
    return this.users;
  }

  changeAge(user:UserModel) {
    user.changeAge();

    const i = this.users.indexOf(user);

    this.users = [
      ...this.users.slice(0, i),
      user,
      ...this.users.slice(i+1)
    ];
  }
}
