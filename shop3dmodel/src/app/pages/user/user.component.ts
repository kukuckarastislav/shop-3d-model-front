import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvanceSearch } from 'src/app/models/AdvanceSearch';
import { ProductPreview } from 'src/app/models/ProductPreview';
import { UserAccountDTO } from 'src/app/models/UserAccountDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  user_id: string = '';
  user: UserAccountDTO = new UserAccountDTO();

  ngOnInit(): void {
    this.user_id = this.route.children[0].snapshot.paramMap.get('id')!;
    this.userService.GetUserPreview(this.user_id).subscribe((data) => {
      this.user = data;
    }); 
  }

}
