
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
  this.getAllIdeas()
  setTimeout(() => { this.ngOnInit() }, 1000)
}

constructor(private http:HttpClient){}

ideaCreated(idea: Idea){
  console.log(idea);
  this.http.post(this.fireBase, idea)
  .subscribe((_response) => {
    // console.log(response)
  })
}


getAllIdeas(){
  this.http.get<{[key: string]: Idea}>(this.fireBase)
  .pipe(map((res) => {
    const ideas = []
      for (const key in res) {
          let idea: Idea = {
            IName: res[key].IName,
            IDesc: res[key].IDesc,
            id: key
          }
          ideas.push(idea)
        }
        return ideas;
      })).subscribe((response) => {
        // console.log(response);
        this.ideas = response;
      })

}

onIdeaDelete(ideaId: any) {
  this.http.delete(this.DeleteUrl + ideaId + ".json").subscribe()
}
}
