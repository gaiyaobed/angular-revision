import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {TestComponent} from "./test/test.component";
import {PageNotFoundComponentComponent} from "./page-not-found-component/page-not-found-component.component";

const routes: Routes = [
  {
    path: '', component: BooksComponent
  },

  {
    path: 'test', component: TestComponent
  },
  {path: '**', component: PageNotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
