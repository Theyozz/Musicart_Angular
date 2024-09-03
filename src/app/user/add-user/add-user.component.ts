import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  form: FormGroup = this.formBuilder.group({
    pseudo: '',
    password: '',
    email: '',
    gender: true,
    firstname: '',
    lastname: '',
    BirthDate: '',
    Address: this.formBuilder.group({
      city: '',
      ZIPCode: '',
      street: ''
    })
    
  });

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  submit(): void {
    this.userService.createuser(this.form).subscribe(
      () => {
        this.toast.success("Utilisateur créé avec succès");
        this.router.navigate(['/login'])
      },
      (err) => {
        this.toast.error("Informations non valides");
      }
    )
  }
}
