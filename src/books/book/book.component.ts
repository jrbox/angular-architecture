import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input()
  book: Book = { title: '', description: '', pages: 0 };
}
