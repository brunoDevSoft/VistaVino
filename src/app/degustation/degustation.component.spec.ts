import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegustationComponent } from './degustation.component';

describe('DegustationComponent', () => {
  let component: DegustationComponent;
  let fixture: ComponentFixture<DegustationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegustationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegustationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
