import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDegustComponent } from './saisie-degust.component';

describe('SaisieDegustComponent', () => {
  let component: SaisieDegustComponent;
  let fixture: ComponentFixture<SaisieDegustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieDegustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDegustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/* ********/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDegustComponent } from './dynamic-form.component';

describe('DynamicFormComponent', () => {
  let component: SaisieDegustComponent;
  let fixture: ComponentFixture<SaisieDegustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieDegustComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieDegustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
