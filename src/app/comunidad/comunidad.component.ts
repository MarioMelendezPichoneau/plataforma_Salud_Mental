import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  
    var ldk=document.createElement('script');
    ldk.type='text/javascript'; ldk.async=true; 
      ldk.src='https://s.cliengo.com/weboptimizer/639610722fbcbd002a55a2a4/639610742fbcbd002a55a2a7.js?platform=view_installation_code_mail_webmaster'; 
      let s=document.getElementsByTagName('script')[0].parentNode;
      // s.parentNode.insertBefore(ldk, s);
  
  }

}
