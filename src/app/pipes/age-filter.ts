import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
  name: 'age'
})

export class AgeFilter implements PipeTransform {
  transform(users, [userage]) {
    return users.filter((user) => user.age === userage);
  }
}
