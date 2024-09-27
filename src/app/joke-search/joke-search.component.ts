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
  protected jokes: Signal<string[]>;

  constructor(dadJokeService: DadJokeService, destroyRef: DestroyRef) {
    const debouncedSearchResults = dadJokeService.debouncedSearchResults(this.query, destroyRef);
    this.jokes = computed(() => {
      const results = debouncedSearchResults() ?? [];
      return results.map((result) => result.joke);
    });
  }
}
