import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageArray = [
    {
      imgUrl:"https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/319644229_1342975526536416_2065935949863902799_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mIvWPxz-9hYAX8sdsXN&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfAiAtz-Cxy42UIWFPD0aBS7nUEt8-A3aCWQMxpbTjcuoQ&oe=64426EB6",
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
