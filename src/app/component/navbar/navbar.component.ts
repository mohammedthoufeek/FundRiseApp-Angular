import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private userService: UserService,private router:Router) {}
  get isUserSignedIn(): boolean {
    return this.userService.getIsAuthenticated();
  }
  signOut() {
    this.userService.signOut().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.userService.setIsAuthenticated(false);
          this.router.navigate(['login']);
          // this.message = "Account Added.
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
}
