import { Component, OnInit } from '@angular/core';
import { Admin } from './MODELS/admin';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import {SHAREDService} from './../shared.service';

@Component({
  selector: 'app-admin84758472429',
  templateUrl: './admin84758472429.component.html',
  styleUrls: ['./admin84758472429.component.css']
})
export class Admin84758472429Component implements OnInit{

  img:string = "https://t3.ftcdn.net/jpg/05/59/98/22/360_F_559982247_IvvYkiCD0cW36D7TwH4KJKGmD8gdbIRV.jpg";

  fireBase = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas.json';
  firebaseApproved ='https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Approved.json';
  DeleteUrl = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas/';
  ideas:Admin[] = []



  ngOnInit():void {
    this.getAllIdeas()
    setTimeout(() => { this.ngOnInit() }, 1000)
  }

  constructor(public http:HttpClient, public sharedService:SHAREDService){}

  ideaAdded(idea: Admin){

    this.http.post(this.fireBase, idea)
    .subscribe((_response) => {

    })
  }

  getAllIdeas(){
    return this.http.get<{[key: string]: Admin}>(this.fireBase)
  .pipe(
  map((res) => {
    const ideas = []
      for (const key in res) {
          let idea: Admin = {
            IName: res[key].IName,
            IDesc: res[key].IDesc,
            id: key
          }
          ideas.push(idea)
        }
        return ideas;
      })).subscribe((response) => {
        this.ideas = response;
      })
 }

  onIdeaDelete(ideaId: any) {
    this.http.delete(this.DeleteUrl + ideaId + ".json").subscribe()
  }

  onIdeaApprove(idea: Admin){
    this.http.post(this.firebaseApproved, idea)
    .subscribe((_response) => {

    })
    this.sharedService.sendIdeaApprove();
  }
}
