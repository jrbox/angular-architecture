import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation } from '../recommendation.model';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {
  @Input()
  recommendation: Recommendation = { name: ''};

  @Output()
  selected = new EventEmitter<Recommendation>();

  onclick() {
    this.selected.emit(this.recommendation);
  }
}
