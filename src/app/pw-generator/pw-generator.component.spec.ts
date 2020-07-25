import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwGeneratorComponent } from './pw-generator.component';
import {TOAST_CONFIG, ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

describe('PwGeneratorComponent', () => {
  let component: PwGeneratorComponent;
  let fixture: ComponentFixture<PwGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwGeneratorComponent ],
      imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormsModule
      ]
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
