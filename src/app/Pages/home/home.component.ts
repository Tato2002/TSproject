import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/298032058_1250484745785495_8917981470214645433_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=4We8xPHTiwkAX9Q4LAs&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfBlBiOckpu0pU4Mz59he-FyxKZd7BY5bmQ3lmVOGBfW8A&oe=644232B7",
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
