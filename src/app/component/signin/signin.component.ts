import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private userService: UserService,private router:Router) { }
  
  signIn() {
    this.userService.signIn();
    this.router.navigate(['home']);
  }
  signOut() {
    this.userService.signOut();
  }
  signUp() {
    this.router.navigate(['register']);
    
  }
}
