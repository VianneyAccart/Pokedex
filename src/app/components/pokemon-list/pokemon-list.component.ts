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

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((pokemon: any) => {
      this.pokemons = pokemon;
    });
  }

  showPokemon(pokemon: Pokemon): void {
    pokemon.isShown = !pokemon.isShown;
  }
}
