import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderLink } from "./header.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) {}

  headerLinks: HeaderLink[] = [];
  activeMobileHeader = false;


  ngOnInit(): void {
    const currentPath = this.location.path();
    this.headerLinks.forEach(x=>{
      x.isActive = x.path === currentPath || x.path === '/' && currentPath === '';
    })
  }

  /**
   * @description - Rend le lien "actif" si l'url correspond à la route
   * @param link - Chemin
   */
  onClickLink(link: string) {
    this.headerLinks.forEach(x=>{
      x.isActive = x.label === link;
    })
  }
}
