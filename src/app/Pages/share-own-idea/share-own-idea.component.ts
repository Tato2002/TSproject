
import { Component, OnInit } from '@angular/core';
import { Idea } from './MODELS/Idea';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-share-own-idea',
  templateUrl: './share-own-idea.component.html',
  styleUrls: ['./share-own-idea.component.css']
})
export class ShareOwnIdeaComponent implements OnInit {

img:string = "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-light-bulb-icon-vector--light-bulb-ideas-symbol-illustration-png-image_1694700.jpg";

fireBase = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas.json';
DeleteUrl = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas/';
ideas:Idea[] = []



ngOnInit():void {
 // this.getAllIdeas()
  setTimeout(() => { this.ngOnInit() }, 0.5)
}

constructor(private http:HttpClient){}

ideaSend(idea: Idea){
  this.http.post(this.fireBase, idea)
  .subscribe((_response) => {
})
}

}
