import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SignupRequest } from 'src/app/models/SignupRequest';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  signupReq: SignupRequest = new SignupRequest();

  ngOnInit(): void {
  }

  signup() {
    if(!this.signupReq.validateProperty()) {
      alert("Fill all the fields");
      return
    }

    if(!this.signupReq.validatePassword()) {
      alert("Passwords do not match");
      return
    }
    this.loginService.signup(this.signupReq).subscribe((data: any) => {
      console.log(data);
      if (data.username === this.signupReq.email) {
        alert("Successfully signed up");
        window.location.href = '/';
      } else {
        alert("Error?")
      }
    }, (err: any) => {
      console.log(err)
      alert("Error: " + err.error);
    } );
  }

}
