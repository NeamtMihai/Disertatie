import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  WorldComponent
} from './world.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  Router
} from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { DataService } from '../Services/data.service';


describe('WorldComponent', () => {
  let component: WorldComponent;
  let fixture: ComponentFixture < WorldComponent > ;
  let router: Router;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,
          RouterTestingModule.withRoutes([]),
        ],
        providers: [DataService],
        declarations: [WorldComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to 4th article', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.goToDetails(4);
    expect(navigateSpy).toHaveBeenCalledWith(['/article', 4]);
  });

  it('should have title \'World News\'', () => {
      expect(component.title).toBe("World News");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
