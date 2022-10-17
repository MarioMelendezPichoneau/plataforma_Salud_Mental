import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'carousel';

  images = [
    {
      imageSrc:
        '/assets/1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
      '/assets/2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
      '/assets/3.png',
      imageAlt: 'person1',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
