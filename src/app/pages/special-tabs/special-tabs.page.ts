import { Component, ElementRef, ViewChild } from '@angular/core';
import { BottomComponentsStateService } from 'src/app/services/bottom-components-state/bottom-components-state.service';

@Component({
  selector: 'app-special-tabs',
  templateUrl: './special-tabs.page.html',
  styleUrls: ['./special-tabs.page.scss'],
})
export class SpecialTabsPage {
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor( public bottomCompStateService: BottomComponentsStateService) { }


  onSearchInputChange(event){
    console.log('event')
    console.log(event)

  }


}
