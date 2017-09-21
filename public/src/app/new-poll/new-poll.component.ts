import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { PollService } from '../poll.service'
import { OptionService} from '../option.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {

  currentUser = {
    _id : '',
  }
  poll = {
    _user : '',
  }
  option1 = {
    _poll : ''
  }
  option2 = {
    _poll : ''
  }
  option3 = {
    _poll : ''
  }
  option4 = {
    _poll : ''
  }

  poll_errors =[]
  option1_errors = []
  option2_errors = []
  option3_errors = []
  option4_errors = []

  constructor(
    private _userService: UserService,
    private router: Router,
    private _router: ActivatedRoute,
    private _pollService: PollService,
    private _optionService : OptionService
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
  
  createPoll(poll, option1, option2, option3, option4){
    
    poll._user = this.currentUser._id
    // console.log(poll)
    this._pollService.create(poll)
    .then(poll => {
      if (poll.errors){
        
        for (let key in poll.errors){
          let error = poll.errors[key].message
          this.poll_errors.push(error)
        }
      }
      // console.log(poll);
      this.createOption(option1, poll._id);
      this.createOption(option2, poll._id);
      this.createOption(option3, poll._id);
      this.createOption(option4, poll._id);
      this.router.navigateByUrl('/dashboard')
    })
    .catch(err => console.log(err))

  
    
  }
  createOption(option, poll_id){
    option._poll = poll_id
    this._optionService.create(option)
    .then(option => {
      if (option.errors){
        
        for (let key in option.errors){
          let error = option.errors[key].message
          this.poll_errors.push(error)
        }
      }
    })
    .catch(err => console.log(err))
  }
}
