import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompanyIncomeComponent } from './view-company-income.component';

describe('ViewCompanyIncomeComponent', () => {
  let component: ViewCompanyIncomeComponent;
  let fixture: ComponentFixture<ViewCompanyIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompanyIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompanyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
