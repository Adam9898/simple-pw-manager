import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PwGeneratorComponent} from './pw-generator/pw-generator.component';
import {AuthComponent} from './auth/auth.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  { path: 'generator', component: PwGeneratorComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
