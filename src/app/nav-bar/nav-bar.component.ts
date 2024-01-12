import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent   {
  @Input() pageTitle1: string="";
  @Input() image: string="https://s3.amazonaws.com/gt7sp-prod/decal/92/35/28/5044682500201283592_1.png";
}
