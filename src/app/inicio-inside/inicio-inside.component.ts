import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-inicio-inside',
  templateUrl: './inicio-inside.component.html',
  styleUrls: ['./inicio-inside.component.css']
})
export class InicioInsideComponent implements OnInit {


  constructor() { }

  ngOnInit(){
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"35306386cf03ced0db82ac7dc8dc9c5e3","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

}
