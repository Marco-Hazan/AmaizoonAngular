import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loggato:boolean = false;

  erroreLogin:string = "";

  formLogin: FormGroup;
  constructor(private router:Router) {
    this.formLogin = new FormGroup({
      'username' : new FormControl(
        '',[ Validators.required]
      ),
      'password' : new FormControl(
        '',[ Validators.required]
      )
    })
   }

   get username(){
    return this.formLogin.get("username");
   }

   get password(){
    return this.formLogin.get("password");
   }

   login(){
    if(this.formLogin.valid){
      if(this.username?.value == 'admin' && this.password?.value == 'admin'){
        this.loggato = true;
        this.router.navigateByUrl("/amministrazione/main");
      }else{
        this.erroreLogin = "Username e/o password errati"
      }
    }
   }

  ngOnInit(): void {
  }

}
