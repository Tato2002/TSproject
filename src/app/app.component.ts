import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tproject';

constructor(public auth: AuthService){}

}
