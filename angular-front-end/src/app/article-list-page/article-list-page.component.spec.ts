import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListPageComponent } from './article-list-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticleListPageComponent', () => {
  let component: ArticleListPageComponent;
  let fixture: ComponentFixture<ArticleListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ ArticleListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
