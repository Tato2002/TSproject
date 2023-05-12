import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent {

  url:string = "https://www.youtube.com/embed/G0dzLanYW1E";
  url1:string = "https://www.youtube.com/embed/uYRq60G5XTk";
  url2:string = "https://www.youtube.com/embed/B216ETbvJxc";
  url3:string = "https://www.youtube.com/embed/Ys8dnY06fNE";
  url4:string = "https://www.youtube.com/embed/zlljnJSTuZA";

  urlSafe: SafeResourceUrl | undefined;


  constructor(public sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  videoBtn(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  videoBtn1(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
  }
  videoBtn2(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }
  videoBtn3(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url3);
  }
  videoBtn4(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url4);
  }

  }


