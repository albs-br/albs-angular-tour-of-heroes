import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent, 
    DashboardComponent,
    HeroesComponent, 
    HeroDetailComponent, 
    MessagesComponent
    ],
  // providers: [HeroService, MessageService],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
