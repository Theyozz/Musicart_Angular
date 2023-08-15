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

  constructor(private authService: AuthService, private tokenService: TokenService, private toast: ToastrService){ }

  ngOnInit(): void {}

  onSubmit(): void{
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenService.saveToken(data.token)
        this.tokenService.saveUserCredentials(this.form.pseudo);
        this.toast.success("Connecté")
      },
      err => {
        this.toast.error("Pseudo ou mot de passe incorrecte")
        console.log(err)}
    )
  }
}
