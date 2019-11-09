import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDetailsIdComponent } from './income-details-id.component';

describe('IncomeDetailsIdComponent', () => {
  let component: IncomeDetailsIdComponent;
  let fixture: ComponentFixture<IncomeDetailsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeDetailsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDetailsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
