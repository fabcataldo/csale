import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csale-top-tabs',
  templateUrl: './csale-top-tabs.component.html',
  styleUrls: ['./csale-top-tabs.component.scss'],
})
export class CSaleTopTabsComponent {
  tabs: [];
  positionTabBar: string;
  constructor(private router: Router) { }

}
