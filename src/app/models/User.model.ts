interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  position: string[];
  roles: string[];
  rate: number;
  locked: number;
  created_at: string;
  updated_at: string;
  token: string;
}

export class User implements IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  position: string[];
  roles: string[];
  rate: number;
  locked: number;
  created_at: string;
  updated_at: string;
  token: string;

  constructor(source: IUser) {
    this.id = source.id;
    this.email = source.email;
    this.first_name = source.first_name;
    this.last_name = source.last_name;
    this.position = source.position;
    this.roles = source.roles;
    this.rate = source.rate;
    this.locked = source.locked;
    this.created_at = source.created_at;
    this.updated_at = source.updated_at;
    this.token = source.token;
  }
}
