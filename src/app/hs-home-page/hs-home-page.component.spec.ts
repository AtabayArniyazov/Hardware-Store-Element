import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HsHomePageComponent} from './hs-home-page.component';

describe('HsHomePageComponent', () => {
  let component: HsHomePageComponent;
  let fixture: ComponentFixture<HsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HsHomePageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
