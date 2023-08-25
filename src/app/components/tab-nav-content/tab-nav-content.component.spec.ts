import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavContentComponent } from './tab-nav-content.component';

describe('TabNavContentComponent', () => {
  let component: TabNavContentComponent;
  let fixture: ComponentFixture<TabNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNavContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
