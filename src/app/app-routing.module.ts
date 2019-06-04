import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentEventsComponent } from './Components/current-events/current-events.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AboutComponent } from './Components/about/about.component';
import { DonateComponent } from './Components/donate/donate.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'current', component: CurrentEventsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
