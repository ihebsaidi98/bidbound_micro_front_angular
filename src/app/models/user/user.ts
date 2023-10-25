export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export class User {
  id: number;
  userName: string;
  password: string;
  email: string;
  role: Role;

  constructor(
    id: number,
    userName: string,
    password: string,
    email: string,
    role: Role
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}
