import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Usermodel } from '../../models/usermodel';
import { Signin } from '../../models/signin';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  userForm: FormGroup;
  signinModel: Signin = new Signin();
  success:string="";
  errorMessage:string="";
  constructor(private userService: UserService,private router:Router,private fb: FormBuilder) {
    localStorage.setItem("isAuthenticated","false");
    this.userForm = this.fb.group({
      email: [this.signinModel.email],
      password: [this.signinModel.password]
    });
  }
  onSubmit() {
    const formData: Signin = this.userForm.value as Signin;
    console.log(formData);
    this.userService.signIn(formData)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
             this.userService.usermodel=data;
             console.log(this.userService.usermodel,this.userService.usermodel.name)
             localStorage.setItem("isAuthenticated","true");
             localStorage.setItem("userdata",JSON.stringify(data));
             
          //  this.userService.setIsAuthenticated(true);
            this.router.navigate(['home']);
            this.success = "Signed in successfully";
            this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            // this.errorMessage="Could't add Account";/
            if (err.status == "0")
              this.errorMessage = " Network error, please try again later."
            else
              this.errorMessage = JSON.stringify(err.error);
            this.success = "";
          }
        }
      );}
  

  signUp() {
    this.router.navigate(['register']);
    
  }
}
