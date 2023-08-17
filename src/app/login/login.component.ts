import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ICredentials } from '../interface/ICredentials.modele';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private authService: AuthService, private tokenService: TokenService, private toastr: ToastrService){ }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenService.saveToken(data.token)
        this.tokenService.saveUserCredentials(this.form.pseudo);
        this.toastr.success("Bienvenue " + this.form.pseudo)
      },
      () =>  this.toastr.error("Utilisateur introuvable")
    )
  }
}
