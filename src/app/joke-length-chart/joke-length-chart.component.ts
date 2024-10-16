import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-joke-length-chart',
  standalone: true,
  imports: [],
  templateUrl: './joke-length-chart.component.html',
  styleUrl: './joke-length-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeLengthChartComponent {
  jokes = input.required<string[]>();

  private jokeLengthCanvas =
    viewChild.required<ElementRef<HTMLCanvasElement>>('jokeLengthCanvas');
}
