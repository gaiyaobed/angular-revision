import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addToCart($event: any) {
    console.log($event)
  }

  fetchBooks() {
  const  books: any =[
      {
        name:'Pythong bok',
        author:  'mack',
        amount: 4555,
        src:  'https://m.media-amazon.com/images/I/61IBZAhDP0L._AC_SY200_.jpg'
      },
      {
        name:'Javascript',
        amount: 4555,

        author:  'mack',
        src:  'https://m.media-amazon.com/images/I/61IBZAhDP0L._AC_SY200_.jpg'
      },
      {
        amount: 4555,

        name:'Javascript course',
        author:  'mack',
        src:  'https://m.media-amazon.com/images/I/61IBZAhDP0L._AC_SY200_.jpg'
      }
    ]
    return books
  }

}
