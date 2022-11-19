import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csale-pair-fixed-buttons',
  templateUrl: './csale-pair-fixed-buttons.component.html',
  styleUrls: ['./csale-pair-fixed-buttons.component.scss'],
})
export class CSalePairFixedButtonsComponent {
  constructor(
    private router: Router
  ) { }

  onMapButtonClicked($event) {
    this.router.navigateByUrl('/places-map')
  }

}
