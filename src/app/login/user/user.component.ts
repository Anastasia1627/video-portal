import { Component, OnInit, Input } from '@angular/core';

import { User } from './user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: User[] = [];

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.user = this.UserService.getUser();
    console.log(this.user);
  }
}
