import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPurchasedCouponsByPriceComponent } from './view-all-purchased-coupons-by-price.component';

describe('ViewAllPurchasedCouponsByPriceComponent', () => {
  let component: ViewAllPurchasedCouponsByPriceComponent;
  let fixture: ComponentFixture<ViewAllPurchasedCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllPurchasedCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPurchasedCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
