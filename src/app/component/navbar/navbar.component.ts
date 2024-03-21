import { Component } from '@angular/core';
import { UserService } from '../../service/userservice.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
NavigationEnd
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isSigned?:boolean;
  constructor(private userService: UserService,private router:Router) {
    const value: string | null = localStorage.getItem("isAuthenticated");
    this.isSigned = value === "true";
    console.log(value, this.isSigned);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const newValue: string | null = localStorage.getItem("isAuthenticated");
        this.isSigned = newValue === "true";
        console.log(newValue, this.isSigned);
      }
    });
  }
  // ngOnInit(): void {
  //   const Value: string | null = localStorage.getItem("isAuthenticated");
  //   this.isSigned = Value === "true";
  //   console.log(Value, this.isSigned);
  // }
  get isUserSignedIn(): boolean {
    return this.userService.getIsAuthenticated();
  }
 
  signOut() {
    this.userService.signOut().subscribe(
      {
        next: (data) => {
          console.log(data);
          //this.userService.setIsAuthenticated(false);
         // localStorage.setItem("isAuthenticated","false");
          localStorage.removeItem("userdata");
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
