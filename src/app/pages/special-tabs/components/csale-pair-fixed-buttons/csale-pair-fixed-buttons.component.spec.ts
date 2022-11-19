import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsalePairFixedButtonsComponent } from './csale-pair-fixed-buttons.component';

describe('CsalePairFixedButtonsComponent', () => {
  let component: CsalePairFixedButtonsComponent;
  let fixture: ComponentFixture<CsalePairFixedButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CsalePairFixedButtonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsalePairFixedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
