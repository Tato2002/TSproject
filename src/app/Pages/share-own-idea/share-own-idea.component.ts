import { Component } from '@angular/core';

@Component({
  selector: 'app-share-own-idea',
  templateUrl: './share-own-idea.component.html',
  styleUrls: ['./share-own-idea.component.css']
})
export class ShareOwnIdeaComponent {
  IdFront:any;
  getFile(event:any){
  this.IdFront = event.target.files[0]
  console.log('file',this.IdFront);
}
img:any = "";
}
