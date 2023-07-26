import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interface/IUser.modele';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user: IUser | undefined;

  constructor(private route: ActivatedRoute,private userService: UserService){}

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.userService.getUser(id).subscribe(
        (user) => {
          this.user = user;
        }
      );
    }
  }
}
