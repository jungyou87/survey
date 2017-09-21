import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  user = {}
  errors = []

  login(user){
    this.errors = []
    // console.log('from component to service',user);
    return this._userService.login(user)
    .then(user => {
      // console.log('after successful login ', user)
      if (user.errors){
        
        for (let key in user.errors){
          let error = user.errors[key].message
          this.errors.push(error)
        }
      }
      else{
        this._userService.setCurrentUser(user)
        this.router.navigateByUrl('/dashboard')
      }

    })
    .catch(err => console.log(err)
    )
  }
  ngOnInit() {
  }

}
