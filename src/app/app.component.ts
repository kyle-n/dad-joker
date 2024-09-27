import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadJokeService } from './dad-joke.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  providers: [DadJokeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected joke = signal<string | undefined>(undefined);

  constructor(readonly dadJokeService: DadJokeService) {}

  protected incrementCount() {
    this.dadJokeService.getRandomJoke().subscribe((joke) => {
      this.joke.set(joke.joke);
    });
  }
}
