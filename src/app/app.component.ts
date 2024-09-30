import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadJokeService } from './dad-joke.service';
import { JsonPipe } from '@angular/common';
import { JokeSearchComponent } from './joke-search/joke-search.component';
import { map, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, JokeSearchComponent],
  providers: [DadJokeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected joke: Signal<string>;
  protected readonly loadNewJokeButtonClicked$ = new Subject<void>();

  constructor(readonly dadJokeService: DadJokeService) {
    const joke$ = this.loadNewJokeButtonClicked$.pipe(
      switchMap(() => dadJokeService.getRandomJoke()),
      map((response) => response.joke)
    );
    this.joke = toSignal(joke$, { initialValue: '' });
  }
}
