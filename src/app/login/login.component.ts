import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ICredentials } from '../interface/ICredentials.modele';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: ICredentials = {
    pseudo: "",
    password: ""
  }

  constructor(private authService: AuthService, private tokenService: TokenService){

  }

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.token)
        this.tokenService.saveToken(data.token)
      },
      err => console.log(err)
    )
  }
}
