import {Component} from 'angular2/core'
import{AuthorService} from './author.service'


@Component({
  selector: 'authors',
  template:`
    <h2>Authors</h2>
  <ul>
    <li *ngFor="#author of authors">
    {{name}}
    </li>
  </ul>
  `,
  providers: [AuthorService]
})


export class AuthorsComponent{
  name: string = "The name of author";
  authors;
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
