import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  newArticles: any;
  query = "travel";
  exception = "Tunisia";

  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) { }

  ngOnInit(): void {
    this._articlesService.getArticlesWithException(this.query, this.exception).subscribe(data => this.newArticles = data.posts);
  }

  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles);
    this.router.navigate(['/article', index]);
  }
}
