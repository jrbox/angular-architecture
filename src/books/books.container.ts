import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Book } from "./book.model";
import { BookComponent } from "./book/book.component";

@Component({
  selector: 'books-container',
  standalone: true,
  imports: [CommonModule, BookComponent],
  template: `
      <style>
        .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 16px;
        }
        .card-container .card:not(:last-child) {
            margin-right: 0;
        } 

        .card-container .card:not(.highlight-card) {
            cursor: pointer;
        }

        .card-container .card:not(.highlight-card):hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
        }
    </style>
    <!-- Resources -->
    <h2>Bibliothèque : </h2>
    <p>Voici la liste des livres disponibles :</p>

    <div class="card-container">
        <app-book *ngFor="let book of books" [book]="book"></app-book>
    </div>
  `,
})
export class BooksContainer {

    books: Book[] = 
    [
    {title: 'The Hobbit', description: 'There and Back Again', pages: 310 },
    { title: 'The Fellowship of the Ring', description: 'The Lord of the Rings', pages: 423 },
    { title: 'The Two Towers', description: 'The Lord of the Rings', pages: 352 },
    { title: 'The Return of the King', description: 'The Lord of the Rings', pages: 416 },
    { title: 'The Silmarillion', description: 'The Lord of the Rings', pages: 365 }
    ];
}
