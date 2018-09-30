import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users:any[] = [];

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getUsersListFromApi().subscribe(
      (res) => {
        this.users = res.json();
      },
      (err) => {
        console.log("Something went wrong: " + err);
      },
      () => {
        console.log("Everythign processed.");
      }
    )
  }

}
