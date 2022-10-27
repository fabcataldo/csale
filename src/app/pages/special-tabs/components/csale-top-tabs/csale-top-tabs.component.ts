import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csale-top-tabs',
  templateUrl: './csale-top-tabs.component.html',
  styleUrls: ['./csale-top-tabs.component.scss'],
})
export class CSaleTopTabsComponent implements OnInit {
  tabs: [];
  positionTabBar: string;
  constructor() { }

  ngOnInit() {}

}
