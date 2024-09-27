import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke, JokeSearchResponse } from './types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadJokeService {
  constructor(private readonly httpClient: HttpClient) {}

  getRandomJoke() {
    return this.httpClient.get<Joke>('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });
  }

  search(query: string) {
    const url = new URL('https://icanhazdadjoke.com/search');
    url.searchParams.append('term', query);
    return this.httpClient.get<JokeSearchResponse>(url.toString(), {
      headers: {
        Accept: 'application/json'
      }
    }).pipe(
      map(response => response.results)
    )
  }

}
