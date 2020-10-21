import { TestBed, inject, async } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../Model/User';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// describe('RegisterService', () => {
//   let service: RegisterService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule
//       ],
//       providers: [RegisterService],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     });
//     httpMock = TestBed.get(HttpTestingController);
//     service = TestBed.inject(RegisterService);
//   });

//   it(`should register user`, async(inject([RegisterService],
//     (registerService: RegisterService) => {

//       var user = new User();
//       user.firstName = "Firstname";
//       user.lastName = "Lastname";
//       user.email = "firstname.lastname@gmail.com";
//       user.password = "test";

//       registerService.doRegister(user)
//         .subscribe(() => {
//           console.log("In doRegister");
//           alert('User registered!');
//         });

//       let req = httpMock.expectOne('http://localhost:8080/users/register');
//       expect(req.request.method).toBe("POST");

//       httpMock.verify();
//     })));

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

// });
