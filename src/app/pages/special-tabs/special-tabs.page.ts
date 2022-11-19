import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapStateService } from 'src/app/services/map-state/map-state.service';

@Component({
  selector: 'app-special-tabs',
  templateUrl: './special-tabs.page.html',
  styleUrls: ['./special-tabs.page.scss'],
})
export class SpecialTabsPage implements OnInit {
  @ViewChild('search') public searchElementRef: ElementRef;
  constructor(private mapStateService: MapStateService) { }

  ngOnInit() {
  }

  onSearchInputChange(event){
    console.log('event')
    console.log(event)

  }


}
