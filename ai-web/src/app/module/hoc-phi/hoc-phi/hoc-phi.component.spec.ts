import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocPhiComponent } from './hoc-phi.component';

describe('HocPhiComponent', () => {
  let component: HocPhiComponent;
  let fixture: ComponentFixture<HocPhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocPhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocPhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
