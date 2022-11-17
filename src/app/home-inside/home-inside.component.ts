import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioInsideComponent } from '../inicio-inside/inicio-inside.component';

interface SideNavToggle{
  screenWith: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home-inside',
  templateUrl: './home-inside.component.html',
  styleUrls: ['./home-inside.component.css']
})
export class HomeInsideComponent implements OnInit {

  isSideNavCollapsed = false;
  screenWidth = 0;

onToggleSideNav(data: SideNavToggle): void{
this.screenWidth = data.screenWith;
this.isSideNavCollapsed = data.collapsed;
}





ngOnInit(): void {
  }

}
