import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation } from '../recommendation.model';
import { RecommendationComponent } from '../recommendation/recommendation.component';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, RecommendationComponent],
  templateUrl: './recommendations.container.html',
  styleUrls: ['./recommendations.container.scss']
})
export class RecommendationsContainer {

    selectedRecommendation: Recommendation = {name: ''};

    recommendations: Recommendation[] = 
    [
        {name: 'Architecture Push'},
        {name: 'Design System'},
        {name: 'Architecture Push'},
        {name: 'Pattern Model Adapter'},
        {name: 'Détection du changement'},
        {name: 'Centraliser la traduction'},
        {name: 'Logs applicatifs'}
    ];

}
