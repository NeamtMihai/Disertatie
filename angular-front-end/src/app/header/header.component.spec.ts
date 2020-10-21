import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should have a NavBar', () => {
    const navbar = fixture.debugElement.query(By.css('.navbar-brand')).nativeElement;
    expect(navbar.innerHTML).not.toBeNull;
  });

  it('should be 7 items in NavBar', () => {
    const items = fixture.debugElement.queryAll(By.css('.nav-item'));
    expect(items.length).toBe(7);
  });

  it('should do Logout', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.doLogout();
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
