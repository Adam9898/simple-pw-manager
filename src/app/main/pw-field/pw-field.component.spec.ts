import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwFieldComponent } from './pw-field.component';

describe('PwFieldComponent', () => {
  let component: PwFieldComponent;
  let fixture: ComponentFixture<PwFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
