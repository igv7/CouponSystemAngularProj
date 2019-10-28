import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllIncomeComponent } from './view-all-income.component';

describe('ViewAllIncomeComponent', () => {
  let component: ViewAllIncomeComponent;
  let fixture: ComponentFixture<ViewAllIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
