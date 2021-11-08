import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonName: string | undefined
  @Input() pokemonDescription: string | undefined

  constructor() {}

  ngOnInit(): void {
    console.log(this.pokemonName, this.pokemonDescription)
  }

}
