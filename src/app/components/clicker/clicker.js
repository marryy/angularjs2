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
var Clicker = (function () {
    function Clicker() {
        this.val = 0;
        this.update = new angular2_1.EventEmitter();
        this.onClick = function (event) {
            this.val++;
            this.update.next({ value: this.val });
        };
        this.onMouseOut = function (event) {
            this.val = 0;
            this.update.next({ value: this.val });
        };
    }
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], Clicker.prototype, "update", void 0);
    Clicker = __decorate([
        angular2_1.Component({
            selector: 'clicker',
            events: ["update"],
            template: '<button (click)="onClick($event)" (mouseout)="onMouseOut($event)">click to incr</button>'
        }), 
        __metadata('design:paramtypes', [])
    ], Clicker);
    return Clicker;
}());
exports.Clicker = Clicker;
//# sourceMappingURL=clicker.js.map