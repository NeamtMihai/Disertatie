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

  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) { }

  ngOnInit(): void {
    // this._articlesService.getArticles(this.query).subscribe(data => this.newArticles = data.posts);
    // this.newArticles =this._articlesService.getNewArticles();
    this._articlesService.getMongoArticles().subscribe(data => this.newArticles = data);
    
  }
  updateRating(i){
      console.log(":World component " + JSON.stringify(this.newArticles[i].currentRate))
      setTimeout(()=>{
        this.newArticles[i].isGroundTruth = true;
        this._articlesService.updateArticle(this.newArticles[i]).subscribe();
      }, 1000)
  }
  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles);
    this.router.navigate(['/article', index]);
  }

  color(i){
    // if(Math.random()>0.5)
      if(this.newArticles[i].isGroundTruth)
       return '#00a8cc';
       else 
       return '#2b580c'
  }
}
