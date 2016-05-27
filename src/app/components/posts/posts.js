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
var posts_service_1 = require('../../services/posts-service/posts-service');
var Posts = (function () {
    function Posts(postsService) {
        var _this = this;
        this.postsService = postsService;
        postsService.posts
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    }
    Posts = __decorate([
        angular2_1.Component({
            selector: 'posts',
            directives: [angular2_1.CORE_DIRECTIVES],
            templateUrl: 'app/components/posts/posts.html'
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], Posts);
    return Posts;
}());
exports.Posts = Posts;
//# sourceMappingURL=posts.js.map