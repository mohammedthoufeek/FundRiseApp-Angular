import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,Validators } from '@angular/forms';
import { Usermodel } from '../../models/usermodel';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userForm: FormGroup;
  userModel: Usermodel = new Usermodel();
  success:string="";
  errorMessage:string="";
  constructor(private userService: UserService,private router:Router,private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      phonenumber: ['', Validators.pattern('[0-9]{10}')],
      age: ['', Validators.min(18)],
      usertype: ['USER', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const formData: Usermodel = this.userForm.value as Usermodel;
    //console.log(formData);
    this.userService.signUp(formData)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.router.navigate(['login']);
            this.success = "Account registered successfully";
            this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            // this.errorMessage="Could't add Account";/
            if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage =JSON.stringify(err.error);
            this.success = "";
          }
        }
      );
   
  }
  signIn() {
    //this.userService.signIn();
    this.router.navigate(['login']);
  }
}
