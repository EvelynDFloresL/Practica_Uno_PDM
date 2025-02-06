import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
