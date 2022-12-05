import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWith: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-prof-area',
  templateUrl: './prof-area.component.html',
  styleUrls: ['./prof-area.component.css']
})
export class ProfAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isSideNavCollapsed = false;
  screenWidth = 0;

onToggleSideNav(data: SideNavToggle): void{
this.screenWidth = data.screenWith;
this.isSideNavCollapsed = data.collapsed;
}


}
