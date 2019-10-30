import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCouponsByTypeComponent } from './view-all-coupons-by-type.component';

describe('ViewAllCouponsByTypeComponent', () => {
  let component: ViewAllCouponsByTypeComponent;
  let fixture: ComponentFixture<ViewAllCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
