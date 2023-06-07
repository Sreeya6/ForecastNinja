import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classModels/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user :User = new User();


  constructor(private  router: Router) { }
  ngOnInit(): void {
  }
  
  Onsubmit(){
    if(this.user.userName==="sreeya" && this.user.userPassword==="sreeya123"
    || this.user.userName==="priya" && this.user.userPassword==="priya123"){
      alert("Login Successfull")
      this.router.navigateByUrl("file-upload")
    }  
    else{
      alert("Wrong Credintials");
    }
  }
}
