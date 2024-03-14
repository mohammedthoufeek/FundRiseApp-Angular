import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usermodel } from '../../models/usermodel';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userForm: FormGroup;
  userModel: Usermodel = new Usermodel();

  constructor(private userService: UserService,private router:Router,private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [this.userModel.name],
      dob: [this.userModel.dob],
      address: [this.userModel.address],
      phonenumber: [this.userModel.phonenumber],
      age: [this.userModel.age],
      usertype: [this.userModel.usertype],
      email: [this.userModel.email],
      password: [this.userModel.password]
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
            // this.message = "Account Added.";
            // this.errorMessage = "";
          },
          error: (err) => {
            console.log(err);
            // // this.errorMessage="Could't add Account";/
            // if (err.status == "0")
            //   this.errorMessage = " Network error, please try again later."
            // else
            //   this.errorMessage = err.error;

            // this.message = "";
          }
        }
      );
   
  }
  signIn() {
    //this.userService.signIn();
    this.router.navigate(['login']);
  }
}
