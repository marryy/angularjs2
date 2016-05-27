"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var user_model_1 = require('../components/user-model/user-model');
// import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
var RestService = (function () {
    function RestService() {
        // constructor(private http:Http) { }
        this.root = "http://jsonplaceholder.typicode.com/posts";
        // getFoods() {
        //   return this.http.get(this.root).map((res:Response) => res.json());
        // }
        this.users = [
            new user_model_1.UserModel(1, 'Bobi', 'old'),
            new user_model_1.UserModel(2, 'Mara'),
            new user_model_1.UserModel(3, 'Nestor'),
            new user_model_1.UserModel(4, 'Strahil'),
            new user_model_1.UserModel(5, 'Hristo', 'old'),
            new user_model_1.UserModel(6, 'Kontantin', 'old'),
            new user_model_1.UserModel(7, 'Anelia'),
            new user_model_1.UserModel(8, 'Siika'),
            new user_model_1.UserModel(9, 'Silviq', 'old'),
            new user_model_1.UserModel(10, 'Severina', 'old'),
            new user_model_1.UserModel(11, 'Sasho'),
            new user_model_1.UserModel(12, 'Misho'),
            new user_model_1.UserModel(13, 'Stoqn', 'old'),
            new user_model_1.UserModel(14, 'Vlado', 'young'),
            new user_model_1.UserModel(15, 'Betty', 'old'),
            new user_model_1.UserModel(16, 'Emil', 'young')
        ];
    }
    RestService.prototype.addUser = function (user) {
        this.users = this.users.concat([user]);
    };
    ;
    RestService.prototype.getUsers = function () {
        return this.users;
    };
    RestService.prototype.changeAge = function (user) {
        user.changeAge();
        var i = this.users.indexOf(user);
        this.users = this.users.slice(0, i).concat([
            user
        ], this.users.slice(i + 1));
    };
    RestService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest-service.js.map