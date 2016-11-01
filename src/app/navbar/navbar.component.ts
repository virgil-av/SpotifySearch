import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent{

  isCollapsed;
  isIn = false;



  toggleHamburger(){
    this.isCollapsed = !this.isCollapsed
    this.isIn = !this.isIn;
  }

}
