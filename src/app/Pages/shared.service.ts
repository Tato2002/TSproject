import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SHAREDService {
  private subject = new Subject<any>();

  sendIdeaApprove(){
    this.subject.next(null);
  }
  getApproveEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
