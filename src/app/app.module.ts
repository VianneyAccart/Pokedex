import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { CreatePokemonPageComponent } from './pages/create-pokemon-page/create-pokemon-page.component'

@NgModule({
  declarations: [
    AppComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonPageComponent
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
