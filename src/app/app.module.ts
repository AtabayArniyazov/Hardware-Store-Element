import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HsHeaderComponent} from './hs-header/hs-header.component';
import {AppRoutingModule} from './app-routing.module';
import {HsHomePageComponent} from './hs-home-page/hs-home-page.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HsHeaderComponent,
    HsHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
