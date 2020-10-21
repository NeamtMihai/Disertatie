import {
  TestBed,
  async,
  fakeAsync,
  tick
} from '@angular/core/testing';

import {
  LoginService
} from './login.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  inject
} from '@angular/core/testing';
import {
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

// describe('LoginService', () => {
//   let service: LoginService;
//   let httpMock: HttpTestingController;
//   const email = "admin@admin.com";
//   const password = "Password1!";

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, ],
//       providers: [LoginService],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     });
//     service = TestBed.inject(LoginService);
//     httpMock = TestBed.get(HttpTestingController);
//   });

//   it(`should fetch mocked users as Observable`, fakeAsync(inject([HttpTestingController, LoginService],
//     (httpClient: HttpTestingController, loginService: LoginService) => {
//       const user = {
//         "email": "firstname.lastname@gmail.com",
//         "password": "test"
//       };

//       loginService.doLogin(email, password)
//         .subscribe(user => {
//           expect(user.email).toBe("firstname.lastname@gmail.com");
//           expect(user.password).not.toEqual(null);
//         });

//       let req = httpMock.expectOne('http://localhost:8080/users/login');
//       expect(req.request.method).toBe("POST");

//       req.flush(user);
//       httpMock.verify();
//     })));  

//   it(`should fetch user from DB as Observable`, async(inject([LoginService],
//     (loginService: LoginService) => {
     
//       loginService.doLogin(email, password)
//         .subscribe(user => {
//           console.log("In doLogin");
//           expect(user.email).toBe(email);
//         });

//       let req = httpMock.expectOne('http://localhost:8080/users/login');
//       expect(req.request.method).toBe("POST");

//       httpMock.verify();
//     })));

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
