import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwGeneratorComponent } from './pw-generator.component';

describe('PwGeneratorComponent', () => {
  let component: PwGeneratorComponent;
  let fixture: ComponentFixture<PwGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
