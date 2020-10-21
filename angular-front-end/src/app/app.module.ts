import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule, TableModule, IconsModule, CardsModule} from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchComponent } from './search/search.component';
import { ArticleListPageComponent } from './article-list-page/article-list-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesService } from './Services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginActivate } from './Services/login.activate';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './world/world.component';
import { TravelComponent } from './travel/travel.component';
import { SportComponent } from './sport/sport.component';
import { BusinessComponent } from './business/business.component';
import { DataService } from './Services/data.service';
import { RegisterService } from './Services/register.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleListComponent,
    SearchComponent,
    ArticleListPageComponent,
    ArticleDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    WorldComponent,
    TravelComponent,
    SportComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    CardsModule,
    WavesModule,
    ButtonsModule,
    RouterModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    IconsModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [ArticlesService, LoginActivate, DataService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
