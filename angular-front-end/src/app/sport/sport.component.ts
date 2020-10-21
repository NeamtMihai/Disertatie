import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  newArticles: any;
  query = "sport";

  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) { }

  ngOnInit(): void {
    this._articlesService.getArticles(this.query).subscribe(data => this.newArticles = data.posts);
  }

  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles);
    this.router.navigate(['/article', index]);
  }
}
