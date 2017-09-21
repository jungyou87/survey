import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { PollService } from '../poll.service'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

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
    }
    else{
      this.router.navigateByUrl('/login')
    }
  }

}
