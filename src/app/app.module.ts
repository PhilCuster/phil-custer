import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeContentComponent } from './home-content/home-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCarouselComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
