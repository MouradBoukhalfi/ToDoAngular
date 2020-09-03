import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import {AppRoutingModule} from './app-routing.module';
import { SharedService } from './shared.service';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot(),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
