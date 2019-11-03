import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponIdComponent } from './coupon-id.component';

describe('CouponIdComponent', () => {
  let component: CouponIdComponent;
  let fixture: ComponentFixture<CouponIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
