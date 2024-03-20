import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { PostComponent } from './component/post/post.component';
import { NotificationComponent } from './component/notification/notification.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MessagesComponent } from './component/messages/messages.component';
import { ListmessagesComponent } from './component/listmessages/listmessages.component';
import { AddpostComponent } from './component/addpost/addpost.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';
// import {CommentComponent} from './component/comment/comment.component';



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
  {path: 'transaction/:postId', component:TransactionsComponent},
  {path: 'comment/:postId', component:TransactionsComponent},
  {path: 'updatePost/:postId', component:UpdatePostComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
