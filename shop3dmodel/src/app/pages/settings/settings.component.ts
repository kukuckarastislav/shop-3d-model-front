import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/models/LoginResponse';
import { UserAccountDTO } from 'src/app/models/UserAccountDTO';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService) { }

  userAccount: UserAccountDTO = new UserAccountDTO();
  userAccountCopy: UserAccountDTO = new UserAccountDTO();
  disabled: boolean = true;
  currentUser: LoginResponse = new LoginResponse();

  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUser();
    this.userService.GetUserPreview(this.currentUser.uuid).subscribe((data) => {
      this.userAccount = data;
    }); 
  }

  startEdit() {
    this.disabled = false;
    this.userAccountCopy = JSON.parse(JSON.stringify(this.userAccount));
  }

  cancelEdit() {
    this.disabled = true;
    this.userAccount = this.userAccountCopy;
  }

  save() {
    this.userService.UpdateUser(this.userAccount).subscribe((data) => {
      this.userAccount = data;
      this.disabled = true;
    }, (err: any) => {
      alert("Error: " + err.error);
    } );
  }

}
