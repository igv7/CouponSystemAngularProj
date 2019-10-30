import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCouponTestComponent } from './add-coupon-test.component';

describe('AddCouponTestComponent', () => {
  let component: AddCouponTestComponent;
  let fixture: ComponentFixture<AddCouponTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCouponTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCouponTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
