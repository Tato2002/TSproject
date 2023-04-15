import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"/src/assets/idea1.jpg",
      imgAlt:"idea1"
    },
    {
      imgUrl:"/src/assets/idea2.jpg",
      imgAlt:"idea2"
    },
    {
      imgUrl:"/src/assets/idea3.jpg",
      imgAlt:"idea3"
    },
    {
      imgUrl:"/src/assets/idea4.jpg",
      imgAlt:"idea4"
    }
  ]
}
