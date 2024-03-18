import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private userService: UserService, private router: Router) {
    if (this.userService.getIsAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

}
