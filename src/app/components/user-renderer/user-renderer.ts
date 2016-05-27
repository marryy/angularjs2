import {Component, Input, NgClass, Output, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'user-renderer',
  directives: [NgClass],
  template:
  `<style>
    .positiveLat {text-decoration: underline;}
    .old {color: green;}
  </style>
  <span [ng-class]="{'positiveLat': user.address.geo.lat > 0}">{{user.name}}</span>
  <button (click)="changeAge()">change age</button>`
})

export class UserRenderer {
  @Input()
  user;

  @Output()
  toggle = new EventEmitter();

  changeAge() {
    this.toggle.next(this.user);
  }
}
