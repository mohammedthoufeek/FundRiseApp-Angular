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
// import {CommentComponent} from './component/comment/comment.component';


import { ListpostComponent } from './component/listpost/listpost.component';
import { BankAccountComponent } from './component/bank-account/bank-account.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent  },
  { path: 'register', component: SignupComponent   },
  { path: 'addpost', component: AddpostComponent   },
  {path: "post/:postId", component: PostComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'bank-account', component: BankAccountComponent },
  { path: 'messageslist', component: ListmessagesComponent },
  {path: 'transaction/:postId', component:TransactionsComponent},
  {path: 'comment/:postId', component:TransactionsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
