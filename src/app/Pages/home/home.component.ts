import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"https://static.vecteezy.com/system/resources/thumbnails/002/206/128/small/money-idea-icon-free-vector.jpg",
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
