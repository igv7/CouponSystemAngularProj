import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCouponsByDateComponent } from './view-all-coupons-by-date.component';

describe('ViewAllCouponsByDateComponent', () => {
  let component: ViewAllCouponsByDateComponent;
  let fixture: ComponentFixture<ViewAllCouponsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCouponsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCouponsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
