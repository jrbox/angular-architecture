import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksContainer } from 'src/books/books.container';
import { RecommendationsContainer } from 'src/recommendations/recommendations-container/recommendations.container';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BooksContainer, RecommendationsContainer],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
