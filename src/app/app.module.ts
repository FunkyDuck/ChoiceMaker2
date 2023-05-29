import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './comp/nav-bar/nav-bar.component';
import { HeaderComponent } from './comp/header/header.component';
import { ShuffleComponent } from './comp/shuffle/shuffle.component';
import { ListComponent } from './comp/list/list.component';
import { ParamsComponent } from './comp/params/params.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    ShuffleComponent,
    ListComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
