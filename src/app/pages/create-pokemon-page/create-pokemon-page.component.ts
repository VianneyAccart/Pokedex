import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/shared/models/Pokemon.class';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent implements OnInit {

  pokemon: Pokemon | undefined
  pokemonForm = this.formBuilder.group({
    name: ['', Validators.required],
    url: ['', Validators.required],
    description: ['', Validators.required]
  })

  constructor(private pokedexService: PokedexService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createPokemon():void {

  }
}
