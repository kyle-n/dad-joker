import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js'

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

  private chartConfig: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Joke Length',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}
