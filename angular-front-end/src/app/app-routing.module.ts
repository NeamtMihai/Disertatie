import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './world/world.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { TravelComponent } from './travel/travel.component';
import { SportComponent } from './sport/sport.component';
import { BusinessComponent } from './business/business.component';
import { LoginActivate } from './Services/login.activate';


const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch: 'full'},
  {path:"header", component: HeaderComponent,},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent, },
  {path:"articles", component: ArticleListPageComponent, },
  {path:"article/:i", component: ArticleDetailsComponent,},
  {path:"world", component: WorldComponent, },
  {path:"travel", component: TravelComponent, },
  {path:"business", component: BusinessComponent, },
  {path:"sport", component: SportComponent, },
  {path:"**",component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
