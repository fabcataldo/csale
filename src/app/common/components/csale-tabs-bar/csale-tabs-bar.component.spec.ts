import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CSaleTabsBarComponent } from './csale-tabs-bar.component';

describe('CSaleTabsBarComponent', () => {
  let component: CSaleTabsBarComponent;
  let fixture: ComponentFixture<CSaleTabsBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CSaleTabsBarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CSaleTabsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
