import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BottomComponentsStateService } from 'src/app/services/bottom-components-state/bottom-components-state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router, public bottomCompStateService: BottomComponentsStateService) {
    this.route.navigate(['/special-tabs/events-for-you']);
  }

}
