import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/User';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let responseEmail = "";
  const email = "admin@admin.com";
  const password = "Password1!";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [LoginService],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should return response',fakeAsync(()=>{
    fixture.detectChanges();
    component.doLogin(email,password);
    tick(5000);
    fixture.detectChanges();
  //  expect(component.testare).toBe(true);
  
  })); */

/*  it("should call getUsers and return list of users", async(() => {
    const response: User[] = [];
  
    spyOn(LoginService, 'doLogin').and.returnValue(of(response))
  
    component.doLogin(email, password);
    fixture.detectChanges();
  
    expect(component.testare).toEqual(true);
  }));  */
  
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
