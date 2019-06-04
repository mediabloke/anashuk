import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CurrentEventsComponent } from './Components/current-events/current-events.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AboutComponent } from './Components/about/about.component';
import { DonateComponent } from './Components/donate/donate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrentEventsComponent,
    HomeComponent,
    ServicesComponent,
    SignUpComponent,
    AboutComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
