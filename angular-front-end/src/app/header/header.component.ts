import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { User } from '../Model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  status = false;
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    /*   this.loginService.getCurrentUser().subscribe(data => {
          this.currentUser = data;
          this.status = true;
          console.log(this.currentUser);
        }); */
    }
  
    doLogout() {
      this.loginService.setLoggedIn(false);
      this.router.navigate(['login']);
      this.currentUser = null;
      localStorage.setItem('access_token', '');
    }

}
