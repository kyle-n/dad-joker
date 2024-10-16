import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-joke-length-chart',
  standalone: true,
  imports: [],
  templateUrl: './joke-length-chart.component.html',
  styleUrl: './joke-length-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeLengthChartComponent {}
