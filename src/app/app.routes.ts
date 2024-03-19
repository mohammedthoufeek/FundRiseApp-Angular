import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { routeGuard } from './guards/routeguard.guard';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { PostComponent } from './component/post/post.component';
import { NotificationComponent } from './component/notification/notification.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MessagesComponent } from './component/messages/messages.component';

import { ListmessagesComponent } from './component/listmessages/listmessages.component';
import { AddpostComponent } from './component/addpost/addpost.component';

import { ListpostComponent } from './component/listpost/listpost.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent  },
  { path: 'register', component: SignupComponent   },
  { path: 'addpost', component: AddpostComponent   },
  {path: "post/:postId", component: PostComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messageslist', component: ListmessagesComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
