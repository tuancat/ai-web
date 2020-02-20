export class Page {
  public users: string = 'users';
  public home: string = 'home';

  public describe(): Array<string> {
    return Object.getOwnPropertyNames(this);
  }
}
