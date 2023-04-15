import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"/assets/images/idea1.jpg",
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
