import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }

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

  // submitInfo = {
  //   email:'',
  //   password:''
  // }

  email:string = '';
  password:string = '';


  constructor(private auth: AuthService){}

  login() {
    if(this.email == ''){
      alert('Please fill all fields')
      return;
    }
    if(this.password == ''){
      alert('Please fill all fields')
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }


}
