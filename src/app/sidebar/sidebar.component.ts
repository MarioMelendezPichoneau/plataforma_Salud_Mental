import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWith: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
}) 
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWith: this.screenWidth})
  }

  closeSidenav():void{
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWith: this.screenWidth})

  }
  ngOnInit(): void {
   }

}
