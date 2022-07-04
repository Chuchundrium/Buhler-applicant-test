import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewItemComponent } from './overview/overview-item/overview-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    NavItemComponent,
    OverviewComponent,
    OverviewItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
