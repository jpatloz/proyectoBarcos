import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaBarcosComponent } from './lista-barcos/lista-barcos.component';
import { BarcoDetailsComponent } from './barco-details/barco-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaBarcosComponent,
    BarcoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
