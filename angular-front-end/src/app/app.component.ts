import { Component } from '@angular/core';
import { ArticlesService } from './Services/articles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-front-end';

  constructor(private _articlesService: ArticlesService) { }

}
