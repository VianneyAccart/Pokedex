import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/Pokemon.class';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('/shared/pokemons.json');
  }
}
