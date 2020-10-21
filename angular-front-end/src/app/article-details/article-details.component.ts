import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ArticlesService
} from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  newArticles: any;
  newArticle: any;
  query: "stock market"; 
  
  constructor(private route: ActivatedRoute, private router: Router, private _articlesService: ArticlesService, private data: DataService) {}


  async ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.newArticles = message;
    });

    if(this.newArticles == 'default message')
    {
      console.log("New API request")
      const t = await this._articlesService.getArticles(this.query).toPromise();
      this.newArticles = t.posts;
    }   

    this.newArticle = this.newArticles[parseInt(
      this.route.snapshot.paramMap.get('i')
    )];
  }

  goPrevious() {
    this.router.navigate(['/article', parseInt(
      this.route.snapshot.paramMap.get('i')
    ) - 1])
    this.ngOnInit();
  }

  goNext() {
    this.router.navigate(['/article', parseInt(
      this.route.snapshot.paramMap.get('i')
    ) + 1])
    this.ngOnInit();
  }

  goBack() {
    this.router.navigate(['/articles', {
      i: this.route.snapshot.paramMap.get('i')
    }])
  }
}
