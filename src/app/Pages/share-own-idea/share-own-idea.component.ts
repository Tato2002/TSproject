
import { Component } from '@angular/core';
import { Idea } from './MODELS/Idea';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-share-own-idea',
  templateUrl: './share-own-idea.component.html',
  styleUrls: ['./share-own-idea.component.css']
})
export class ShareOwnIdeaComponent {

fireBase = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas.json';
ideas:Idea[] = []


constructor(private http:HttpClient){}

ideaSend(idea: Idea){
  this.http.post(this.fireBase, idea)
  .subscribe((_response) => {
})
}
adminAlert() {
  alert('To see your idea, you should approve it from ADMIN page: \n email: admin@gmail.com\n password: ADMINISTRATOR1')
}
}
