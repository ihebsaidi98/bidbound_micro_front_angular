import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component'; // Import the HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule // A
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
