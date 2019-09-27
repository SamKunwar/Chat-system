export class Hero {
    id: number;
    name: string;
  }
  
  export class NormalUser {
    id: number;
    name: string;
  }
  
  export class Channel {
    id: number;
    name: string;
  }
  
  export enum Role {
    GroupAdmin = 'Group Admin',
    SuperAdmin = 'Super Admin',
    GroupAssis = 'Group Assis',
    NormalUser = 'Normal User',
}
export class User {
    id: number;
    username: string;
    password: string;
    role: Role;
    token?: string;
}
