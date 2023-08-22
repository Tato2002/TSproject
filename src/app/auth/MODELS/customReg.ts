export interface IdeaCustomReg {
  category:string;
  country:string;
  email:string;
  password:string;
  agree:boolean;
}

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
}
}
