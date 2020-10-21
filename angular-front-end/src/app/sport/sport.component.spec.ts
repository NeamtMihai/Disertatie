import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  SportComponent
} from './sport.component';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SportComponent', () => {
  let component: SportComponent;
  let fixture: ComponentFixture < SportComponent > ;
  let router: Router;
  
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
        declarations: [SportComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should navigate to the second article', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.goToDetails(2);
    expect(navigateSpy).toHaveBeenCalledWith(['/article', 2]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
