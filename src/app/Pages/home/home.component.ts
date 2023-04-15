import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"/assets/idea1.jpg",
      imgAlt:"idea1"
    },
    {
      imgUrl:"/assets/idea2.jpg",
      imgAlt:"idea2"
    },
    {
      imgUrl:"/assets/idea3.jpg",
      imgAlt:"idea3"
    },
    {
      imgUrl:"/assets/idea4.jpg",
      imgAlt:"idea4"
    }
  ]
}
