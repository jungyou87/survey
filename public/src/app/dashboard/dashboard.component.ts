import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { PollService } from '../poll.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser = {}
  polls = []

  constructor(
    private _userService: UserService,
    private router: Router,
    private _router: ActivatedRoute,
    private _pollService: PollService
  ) { }

  isLoggedIn(){
    if (this._userService.getCurrentUser() == null){
      this.router.navigateByUrl('/login')
      return false
    }
    else {
      return true
    }
  }

  logout(){
    this._userService.logout()
    this.router.navigateByUrl('/login')
  }

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser()
  }

  ngOnInit() {
    if(this.isLoggedIn()){
      this.getCurrentUser()
      this.getPolls()
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

  getPolls(){
    this._pollService.index()
    .then(polls => {
      this.polls = polls
      console.log(this.polls);
    })
    .catch(err =>  console.log(err));
  }



}
