//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {SHAREDService} from './../shared.service';
import { Subscription, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cmnIdea } from './MODELS/cmnIdea';
@Component({
  selector: 'app-common-ideas',
  templateUrl: './common-ideas.component.html',
  styleUrls: ['./common-ideas.component.css']
})
export class CommonIdeasComponent implements OnInit{
  img:string = "https://png.pngtree.com/png-vector/20190828/ourmid/pngtree-light-bulb-icon-vector-light-bulb-ideas-symbol-illustration-png-image_1715627.jpg";
  fireBase = 'https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Ideas.json';
  firebaseApproved ='https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app/Approved.json';
  ideas:cmnIdea[] = []

  clickEventSubscription:Subscription;
  constructor(private sharedService:SHAREDService, public http1:HttpClient){
    this.clickEventSubscription = this.sharedService.getApproveEvent().subscribe(() =>{
      this.addingIdea;
    })
  }
  addingIdea(){
    this.http1.get<{[key: string]: cmnIdea}>(this.firebaseApproved)
    .pipe(map((res) => {
      const ideas = []
        for (const key in res) {
            let idea: cmnIdea = {
              IName: res[key].IName,
              IDesc: res[key].IDesc,
              id: key
            }
            ideas.push(idea)
          }
          return ideas;
        })).subscribe((response) => {
          console.log(response);
          this.ideas = response;
        })
      }

      ngOnInit(): void {

        setTimeout(() => {
          this.addingIdea();
        }, 1000);
      }
}
