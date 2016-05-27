import {Component, Output, EventEmitter} from 'angular2/angular2';

@Component({
  selector: 'search-box',
  directives: [],
  template:
    '<div>\
        <input #input type="text" (input)="update.next(input.value)">\
    </div>'
})
export class SearchBox {
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.next("");
  }
}
