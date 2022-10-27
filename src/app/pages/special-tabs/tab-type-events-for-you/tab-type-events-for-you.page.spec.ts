import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabTypeEventsForYouPage } from './tab-type-events-for-you.page';

describe('TabTypeEventsForYouPage', () => {
  let component: TabTypeEventsForYouPage;
  let fixture: ComponentFixture<TabTypeEventsForYouPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTypeEventsForYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabTypeEventsForYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
