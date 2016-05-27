import {Component, EventEmitter, Output} from 'angular2/angular2'

@Component({
  selector: 'clicker',
  events: ["update"],
  template: '<button (click)="onClick($event)" (mouseout)="onMouseOut($event)">click to incr</button>'
})

export class Clicker {
  val = 0;
  @Output()
  update = new EventEmitter();

  onClick = function(event) {
    this.val++;
    this.update.next({value: this.val});
  }

  onMouseOut = function(event) {
    this.val = 0;
    this.update.next({value: this.val});
  }
}
