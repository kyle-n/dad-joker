import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeLengthChartComponent } from './joke-length-chart.component';

describe('JokeLengthChartComponent', () => {
  let component: JokeLengthChartComponent;
  let fixture: ComponentFixture<JokeLengthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeLengthChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeLengthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
