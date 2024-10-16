import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import 'chart.js/auto';
import { Chart, ChartConfiguration } from 'chart.js';

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

  private chart: Chart | undefined;
  private chartConfig: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: [], // <------ replace with "Joke 1", "Joke 2", etc.
      datasets: [
        {
          label: 'Joke Length',
          data: [], // <------ replace with joke lengths
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
}
