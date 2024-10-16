import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  model,
  Signal,
} from '@angular/core';
import { DadJokeService } from '../dad-joke.service';
import { FormsModule } from '@angular/forms';
import { Joke } from '../types';
import { JokeLengthChartComponent } from '../joke-length-chart/joke-length-chart.component';

@Component({
  selector: 'app-joke-search',
  standalone: true,
  imports: [FormsModule, JokeLengthChartComponent],
  templateUrl: './joke-search.component.html',
  styleUrl: './joke-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeSearchComponent {
  protected query = model('');
  protected jokes: Signal<string[]>;

  constructor(dadJokeService: DadJokeService, destroyRef: DestroyRef) {
    const debouncedSearchResults: Signal<Joke[] | undefined> =
      dadJokeService.debouncedSearchResults(this.query, destroyRef);
    this.jokes = computed(() => {
      const results = debouncedSearchResults() ?? [];
      return results.map((result) => result.joke);
    });
  }
}
