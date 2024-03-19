import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usermodel } from '../../models/usermodel';
import { UserService } from '../../service/userservice.service';
import {  HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user!: Usermodel;
  constructor(private userservice:UserService) {
   
    
    this.userservice.getProfileById(this.userservice.usermodel.id).subscribe(
      {
        next: (data:Usermodel) => {
          console.log(data);
          this.user=data;
          
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

}
