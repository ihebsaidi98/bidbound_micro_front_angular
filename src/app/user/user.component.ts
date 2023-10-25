import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Role, User } from '../models/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  newUser: User = {
    id: 0,
    userName: '',
    password: '',
    email: '',
    role: Role.USER
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      (createdUser: User) => {
        console.log('User created:', createdUser);
      },
      (error: any) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
