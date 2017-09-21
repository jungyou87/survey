import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollComponent } from './poll/poll.component'

const routes: Routes = [
  { path: '', pathMatch : 'full', redirectTo: 'login'  },
  { path: 'login',  component : LoginComponent },
  { path: 'dashboard',  component : DashboardComponent },
  { path: 'dashboard/polls/new',  component : NewPollComponent },
  { path: 'dashboard/polls/:id', component : PollComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
