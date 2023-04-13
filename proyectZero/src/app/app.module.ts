import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideComponent } from './component/aside/aside.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesComponent } from './pages/games/games.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GameCardsComponent } from './component/game-cards/game-cards.component';
import { ButtonComponent } from './component/button/button.component';
import { FilterPipe } from './pipes/filter.pipe';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent,
    LoginComponent,
    GamesComponent,
    ProfileComponent,
    GameCardsComponent,
    ButtonComponent,
    FilterPipe,
    GamePageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
