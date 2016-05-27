import {Component, Output, EventEmitter, FORM_DIRECTIVES, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';

@Component({
  selector: 'age-selector',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  template: `<div>
    <select #sel (change)="select.next(sel.value)">
      <option *ng-for="#age of ages">
        {{age}}
      </option>
  </div>`
})

export class AgeSelector implements OnInit {
  @Output() select = new EventEmitter();
  ages = ["young", "old"];
  onInit;
}
