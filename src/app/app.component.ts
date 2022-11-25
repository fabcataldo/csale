import { Component } from '@angular/core';
import { BottomComponentsStateService } from './services/bottom-components-state/bottom-components-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public bottomCompStateService: BottomComponentsStateService) {}
}
