import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-joke-search',
  standalone: true,
  imports: [],
  templateUrl: './joke-search.component.html',
  styleUrl: './joke-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeSearchComponent {

}
