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
var users_actions_1 = require('../users-actions/users-actions');
var contacts_1 = require('../contacts/contacts');
var posts_1 = require('../posts/posts');
var rest_service_1 = require('../../services/rest-service');
var users_service_1 = require('../../services/users-service/users-service');
var posts_service_1 = require('../../services/posts-service/posts-service');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            directives: [users_actions_1.UsersActions, router_1.ROUTER_DIRECTIVES, contacts_1.Contacts, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            templateUrl: 'app/components/app/app.html'
        }),
        router_1.RouteConfig([
            { path: '/contacts', component: contacts_1.Contacts, as: 'Contacts' },
            { path: '/users', component: users_actions_1.UsersActions, as: 'UsersActions' },
            { path: '/posts', component: posts_1.Posts, as: 'Posts' },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent, [rest_service_1.RestService, users_service_1.UsersService, posts_service_1.PostsService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.js.map