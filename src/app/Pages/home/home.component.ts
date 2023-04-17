import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"https://w.forfun.com/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg",
      imgAlt:"idea1"
    },
    {
      imgUrl:"/assets/images/idea2.jpg",
      imgAlt:"idea2"
    },
    {
      imgUrl:"/assets/images/idea3.jpg",
      imgAlt:"idea3"
    },
    {
      imgUrl:"/assets/images/idea4.jpg",
      imgAlt:"idea4"
    }
  ]
}
