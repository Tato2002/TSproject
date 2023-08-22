import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthComponent } from 'src/app/auth/auth.component';
import { AuthResponseData, AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private mode:AuthComponent,
              private authService: AuthService,
              private router: Router){}
  visible:boolean = true;
  changetype:boolean = true;
  error = this.mode.error;

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  switchMode() {
    this.mode.isLoginMode = !this.mode.isLoginMode
  }

  submit(registerForm:NgForm) {
    const email = registerForm.value.email;
    const password = registerForm.value.password;
    const username = registerForm.value.username;
    const adminEmail = 'admin@gmail.com';
    const adminPass = 'ADMINISTRATOR1';

    let authObs: Observable<AuthResponseData>;
    this.mode.isLoading = true;

    if (this.mode.isLoginMode) {
     authObs = this.authService.login(email, password);
    } else {
     authObs = this.authService.signup(email, password)
    }

  authObs.subscribe({
    next: (resData:any) => {
      console.log(resData);
      this.router.navigate(['/home']);
      if(registerForm.value.email === adminEmail && registerForm.value.password === adminPass){
        this.router.navigate(['/admin84758472429']);
      };
     sessionStorage.setItem('loggedUser', username)
     },
     error: (errorMessage:any) => {
      this.error = errorMessage;
      console.log(errorMessage);
      this.mode.isLoading = false;
     }
   })
  }

}
