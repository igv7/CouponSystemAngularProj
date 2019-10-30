import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPurchasedCouponsByTypeComponent } from './view-all-purchased-coupons-by-type.component';

describe('ViewAllPurchasedCouponsByTypeComponent', () => {
  let component: ViewAllPurchasedCouponsByTypeComponent;
  let fixture: ComponentFixture<ViewAllPurchasedCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPurchasedCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPurchasedCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
