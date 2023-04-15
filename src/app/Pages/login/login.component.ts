import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submit(event:Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value)
  }
  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  visible:boolean = true;
  changetype:boolean = true;

  submitInfo = {
    email:'',
    password:''
  }

}
