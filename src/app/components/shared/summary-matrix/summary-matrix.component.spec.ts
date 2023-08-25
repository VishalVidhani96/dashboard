import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryMatrixComponent } from './summary-matrix.component';

describe('SummaryMatrixComponent', () => {
  let component: SummaryMatrixComponent;
  let fixture: ComponentFixture<SummaryMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
