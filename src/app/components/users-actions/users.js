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
var users_input_1 = require('../users-input/users-input');
var users_list_1 = require('../users-list/users-list');
var search_box_1 = require('../search-box/search-box');
var clicker_1 = require('../clicker/clicker');
var age_selector_1 = require('../age-selector/age-selector');
var router_1 = require('angular2/router');
var angular2_2 = require('angular2/angular2');
var Users = (function () {
    function Users() {
        this.value = 0;
        this.onUpdate = function (event) {
            this.value = event.value;
        };
    }
    Users = __decorate([
        angular2_1.Component({
            selector: 'users',
            providers: [angular2_2.FORM_PROVIDERS],
            directives: [users_input_1.UsersInput, users_list_1.UsersList, age_selector_1.AgeSelector, search_box_1.SearchBox, clicker_1.Clicker, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/components/users/users.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=users.js.map