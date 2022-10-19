import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.fetchBooks()
  }

  books = []
  disable: boolean = false
  username = ''
  show: boolean = false
  handleClick() {
    this.show = !this.show
  }
  addToCart($event: any) {
    return this.bookService.addToCart($event)
  }

}
