import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent, 
    // HelloComponent, 
    HeroesComponent, HeroDetailComponent
    ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
