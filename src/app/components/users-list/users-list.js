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
var user_renderer_1 = require('../user-renderer/user-renderer');
var name_filter_1 = require('../../pipes/name-filter');
var age_filter_1 = require('../../pipes/age-filter');
var users_service_1 = require('../../services/users-service/users-service');
var UsersList = (function () {
    function UsersList(usersService) {
        var _this = this;
        this.usersService = usersService;
        this.greeting = "List of users:";
        usersService.users
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], UsersList.prototype, "userage", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], UsersList.prototype, "letter", void 0);
    UsersList = __decorate([
        angular2_1.Component({
            selector: 'users-list',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, user_renderer_1.UserRenderer],
            pipes: [name_filter_1.NameFilter, age_filter_1.AgeFilter],
            templateUrl: 'app/components/users-list/users-list.html'
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersList);
    return UsersList;
}());
exports.UsersList = UsersList;
//# sourceMappingURL=users-list.js.map