import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Services
import { PhotosService } from './photos.service';

const appRoutes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeContentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCarouselComponent,
    HomeContentComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
  ],
  providers: [ 
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
