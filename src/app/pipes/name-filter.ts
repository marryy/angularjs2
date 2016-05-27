import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
  name: 'namesWith'
})

export class NameFilter implements PipeTransform {
  transform(users, [letter]) {
    return users.filter((user) => user.name.startsWith(letter));;
  }
}
