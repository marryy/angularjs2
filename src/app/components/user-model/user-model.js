"use strict";
var UserModel = (function () {
    function UserModel(id, name, age) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 'young'; }
        this.id = id;
        this.name = name;
        this.age = age;
    }
    UserModel.prototype.changeAge = function () {
        this.age = this.age == 'young' ? 'old' : 'young';
    };
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user-model.js.map