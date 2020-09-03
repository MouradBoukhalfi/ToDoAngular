import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import {AppRoutingModule} from './app-routing.module';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
