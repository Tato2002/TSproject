import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }


  ////////-----LOGIN----//////////
  loggedIn = false;

  login(email:string, password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      this.router.navigate(['/home']);
      this.loggedIn = true;
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }


   ////////-----REGISTER----//////////
  register(email:string, password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert('Registration has been Successfull');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

    ////////-----LOG OUT----//////////
    logout(){
      this.fireauth.signOut().then( () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.loggedIn = false;
      }, err => {
        alert(err.message);
      })
    }


}
