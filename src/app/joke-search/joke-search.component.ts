import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { DadJokeService } from '../dad-joke.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-joke-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './joke-search.component.html',
  styleUrl: './joke-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeSearchComponent {
  protected query = model('');
  protected jokes = signal<string[]>([]);

  constructor(dadJokeService: DadJokeService) {
    const queryValue: Observable<string> = toObservable(this.query)
    queryValue.pipe(
        takeUntilDestroyed(),
        filter((query) => query.length > 2),
        debounceTime(2 * 1000),
        switchMap((query) => dadJokeService.search(query))
      ).subscribe((response) => {
        this.jokes.set(response.map((jokeData) => jokeData.joke));
      })
  }
}
