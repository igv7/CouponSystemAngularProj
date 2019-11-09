import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCompanyIdComponent } from './income-company-id.component';

describe('IncomeCompanyIdComponent', () => {
  let component: IncomeCompanyIdComponent;
  let fixture: ComponentFixture<IncomeCompanyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeCompanyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeCompanyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
