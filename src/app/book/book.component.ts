import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() book: any = {} as any;

  @Output() bookEmitter = new EventEmitter<any>()

  addToCart() {
    this.bookEmitter.emit(this.book)
  }
}
