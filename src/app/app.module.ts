import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TopBarComponent } from './components/shared/header/top-bar/top-bar.component';
import { MenuBarComponent } from './components/shared/header/menu-bar/menu-bar.component';
import { IdentityBarComponent } from './components/shared/header/identity-bar/identity-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    MenuBarComponent,
    IdentityBarComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
