import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from './types';
import { Observable } from 'rxjs';

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

}
