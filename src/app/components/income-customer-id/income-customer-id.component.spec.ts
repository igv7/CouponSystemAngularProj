import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCustomerIdComponent } from './income-customer-id.component';

describe('IncomeCustomerIdComponent', () => {
  let component: IncomeCustomerIdComponent;
  let fixture: ComponentFixture<IncomeCustomerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeCustomerIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
