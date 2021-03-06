import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsHeaderComponent } from './hs-header.component';

describe('HsHeaderComponent', () => {
  let component: HsHeaderComponent;
  let fixture: ComponentFixture<HsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
