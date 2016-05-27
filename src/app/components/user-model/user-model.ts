export class UserModel {

  constructor(
    private id:number,
    public name:string = '',
    public age:string = 'young'
  ) {}

  changeAge():void {
    this.age = this.age == 'young' ? 'old' : 'young';
  }

}
