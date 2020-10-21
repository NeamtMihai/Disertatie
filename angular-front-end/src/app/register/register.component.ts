import { Component, OnInit, HostListener } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/User';
import { MustMatch } from '../must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../assets/css/style.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  disabledSubmitButton: boolean = true;
  submitted = false;

  @HostListener('input') oninput() {

    if (this.registerForm.valid) {
      this.disabledSubmitButton = false;
    }

  }
  
  constructor(private fb: FormBuilder, private registerService: RegisterService) {

    this.registerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
   }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }

  doRegister() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    let userHandler = new User();
    userHandler.firstName = this.registerForm.value.firstName;
    userHandler.lastName = this.registerForm.value.lastName;
    userHandler.email = this.registerForm.value.email;
    userHandler.password = this.registerForm.value.password;
    console.log(userHandler);
    this.registerService.doRegister(userHandler).subscribe(() => {
      alert('User has been succesfully added!');
      this.registerForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
