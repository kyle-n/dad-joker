import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, Signal } from '@angular/core';
import { Joke, JokeSearchResponse } from './types';
import { debounceTime, filter, map, Observable, switchMap } from 'rxjs';
import {
  toObservable,
  toSignal,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DadJokeService {
  constructor(private readonly httpClient: HttpClient) {}

  getRandomJoke() {
    return this.httpClient.get<Joke>('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  search(query: string) {
    const url = new URL('https://icanhazdadjoke.com/search');
    url.searchParams.append('term', query);
    return this.httpClient
      .get<JokeSearchResponse>(url.toString(), {
        headers: {
          Accept: 'application/json',
        },
      })
      .pipe(map((response) => response.results));
  }

  debouncedSearchResults(
    query: Signal<string>,
    destroyRef: DestroyRef
  ): Signal<Joke[] | undefined> {
    const queryValue: Observable<string> = toObservable(query);
    return toSignal(
      queryValue.pipe(
        takeUntilDestroyed(destroyRef),
        filter((query) => query.length > 2),
        debounceTime(2 * 1000),
        switchMap((query) => this.search(query))
      )
    );
  }
}
