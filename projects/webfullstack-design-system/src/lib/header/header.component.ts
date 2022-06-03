import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) {}

  headerLinks = [
    {path: '/prices' , label: 'Prices' , active: false},
    {path: '/' , label: 'Start page' , active : true},
    {path: '/offer' , label: 'Offer', active: false},
    {path: '/about-us' , label: 'About us', active: false},
    {path: '/contact' , label: 'Contact', active: false},
    {path:'/users' , label: 'Users', active: false},
  ]
  activeMobileHeader = false;
  ngOnInit(): void {
    const currentPath = this.location.path();
    this.headerLinks.forEach(x=>{
      x.active = x.path === currentPath || x.path === '/' && currentPath ==='';
    })
  }

  onClickLink(link: string) {
    this.headerLinks.forEach(x=>{
      x.active = x.label === link;
    })
  }
}
