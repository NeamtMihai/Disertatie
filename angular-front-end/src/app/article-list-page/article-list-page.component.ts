import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-article-list-page',
  templateUrl: './article-list-page.component.html',
  styleUrls: ['./article-list-page.component.css']
})
export class ArticleListPageComponent implements OnInit {

  showArticles = false;
  newArticles: any;

  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) {}

  ngOnInit(): void {}

  searchArticles(query: string) {
    this._articlesService.getCustomArticle(query).subscribe(data => this.newArticles = data.posts);
    this.showArticles = true;
  }

  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles)
    this.router.navigate(['/article', index]);
  }

}
