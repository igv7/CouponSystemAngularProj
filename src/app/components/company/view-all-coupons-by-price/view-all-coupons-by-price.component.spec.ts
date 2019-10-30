import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCouponsByPriceComponent } from './view-all-coupons-by-price.component';

describe('ViewAllCouponsByPriceComponent', () => {
  let component: ViewAllCouponsByPriceComponent;
  let fixture: ComponentFixture<ViewAllCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
