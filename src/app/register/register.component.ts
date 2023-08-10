import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){}

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.userService.createuser(this.form).subscribe(
      response => {
        console.log('Response from the server:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }
}


