import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private userService: UserService) {}

  get isUserSignedIn(): boolean {
    return this.userService.getIsAuthenticated();
  }
}
