import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerIncomeComponent } from './view-customer-income.component';

describe('ViewCustomerIncomeComponent', () => {
  let component: ViewCustomerIncomeComponent;
  let fixture: ComponentFixture<ViewCustomerIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
