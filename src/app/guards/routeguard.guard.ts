import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/userservice.service';

export const routeGuard: CanActivateFn = (route, state) => {
  const userService = new UserService(); 

  // if (userService.getIsAuthenticated()) {
  //   return state.url !== 'home';
  // } else {
  //   return state.url === 'login' || state.url === 'home';
  // }
  return true;
};
