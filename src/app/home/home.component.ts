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

  ngOnInit(){
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"2b934abc8d00ce8c779aa4463ab50e238","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate|| {});
}
  }




