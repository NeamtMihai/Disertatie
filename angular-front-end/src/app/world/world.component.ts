import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  
  title = 'World News';
  newArticles: any;
  // currentRate = 8;


  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) { }

  ngOnInit(): void {
    // this._articlesService.getArticles(this.query).subscribe(data => this.newArticles = data.posts);
    this.newArticles =this._articlesService.getNewArticles();
    this._articlesService.getMongoArticles();
    
  }

  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles);
    this.router.navigate(['/article', index]);
  }
}
