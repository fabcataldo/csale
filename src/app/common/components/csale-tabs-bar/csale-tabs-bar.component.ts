import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csale-tabs-bar',
  templateUrl: './csale-tabs-bar.component.html',
  styleUrls: ['./csale-tabs-bar.component.scss'],
})
export class CSaleTabsBarComponent implements OnInit{
  @Input() tabs = [];
  @Input() defaultSelectedTab: number;
  selectedTab = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.selectedTab = this.tabs.find(tab => tab.id === this.defaultSelectedTab);
  }

  navigateTo(tab, index) {
    this.selectedTab = tab;
    this.router.navigate([tab.route]);
  }
}
