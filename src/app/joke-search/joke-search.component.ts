import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DadJokeService } from '../dad-joke.service';

@Component({
  selector: 'app-joke-search',
  standalone: true,
  imports: [],
  templateUrl: './joke-search.component.html',
  styleUrl: './joke-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeSearchComponent {
  constructor(private readonly dadJokeService: DadJokeService) {}
}
