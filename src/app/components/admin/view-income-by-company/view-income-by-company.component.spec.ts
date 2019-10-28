import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIncomeByCompanyComponent } from './view-income-by-company.component';

describe('ViewIncomeByCompanyComponent', () => {
  let component: ViewIncomeByCompanyComponent;
  let fixture: ComponentFixture<ViewIncomeByCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIncomeByCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIncomeByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
