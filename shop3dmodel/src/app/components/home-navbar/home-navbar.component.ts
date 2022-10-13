import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  constructor(private modalService: NgbModal, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginResponse = this.loginService.getCurrentUser();
  }
  loginRequest: LoginRequest = new LoginRequest();
  loginResponse: LoginResponse = new LoginResponse();

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  login() {
    console.log(this.loginRequest.email)
    this.loginService.login(this.loginRequest).subscribe((data: any) => {
      this.loginResponse = data;
      this.successfulLogin(this.loginResponse);
      console.log(this.loginResponse)
      this.modalService.dismissAll();
      location.reload();
    }, (error: any) => { 

    });
  }

  successfulLogin(loginResponse: LoginResponse) {
    this.loginService.loginSetUser(loginResponse);
  }

  logout() {
    this.loginService.logout();
  }

}
