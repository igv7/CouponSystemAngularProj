import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncomeByCustomerComponent } from './view-income-by-customer.component';

describe('ViewIncomeByCustomerComponent', () => {
  let component: ViewIncomeByCustomerComponent;
  let fixture: ComponentFixture<ViewIncomeByCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIncomeByCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncomeByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
