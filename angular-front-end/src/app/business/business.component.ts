import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  ArticlesService
} from '../Services/articles.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  newArticles: any;
  query = "stock market";

  constructor(private router: Router, private _articlesService: ArticlesService, private dataService: DataService) {}

  ngOnInit(): void {
    this._articlesService.getArticles(this.query).subscribe(data => this.newArticles = data.posts);
  }

  goToDetails(index: number) {
    this.dataService.changeMessage(this.newArticles);
    this.router.navigate(['/article', index]);
  }
}
