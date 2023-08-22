import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private authService: AuthService) {}
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
   });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }





}
