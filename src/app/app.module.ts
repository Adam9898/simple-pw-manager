import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PwGeneratorComponent } from './pw-generator/pw-generator.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './validation/match-password.directive';
import { ValidateUniqueEmailDirective } from './validation/validate-unique-email.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { MainComponent } from './main/main.component';
import { PwFieldComponent } from './main/pw-field/pw-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    PwGeneratorComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MatchPasswordDirective,
    ValidateUniqueEmailDirective,
    MainComponent,
    PwFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
