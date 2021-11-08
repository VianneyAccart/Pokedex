import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.class';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
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

  // Affiche les informations d'un pokémon à la fois et change le contenu du bouton
  showPokemon(pokemon: Pokemon): void {
    pokemon.isShown = !pokemon.isShown;
  }
}
