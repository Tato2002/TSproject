import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  username = '';

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }

}
