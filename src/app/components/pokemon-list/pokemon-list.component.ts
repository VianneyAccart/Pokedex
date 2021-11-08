import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon.class';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[];

  constructor() {
    this.pokemons = new Array();
  }

  // Affiche les informations d'un pokémon à la fois et change le contenu du bouton
  showPokemon(pokemon: Pokemon): void {
    pokemon.isShown = !pokemon.isShown;
  }
}
