import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.class';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokedexService: PokedexService) {
    this.pokemons = new Array();
  }

  // Permet de récupérer les données de pokemons.json
  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((pokemon: any) => {
      // Le tableau d'objets pokemon issu du pokemons.json est stocké dans pokemons
      this.pokemons = pokemon;
    });
  }

}
