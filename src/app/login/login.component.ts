import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {GoogleAuthProvider} from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(public auth: AngularFireAuth, public router: Router) { }

  inputType = "password"

  ngOnInit(): void {
  }

  clickregister(){
    this.auth.signInWithEmailAndPassword(this.login.controls.email.value, this.login.controls.password.value).then(rez =>{
     this.router.navigateByUrl('/')
    })

    
  }

  clickVisibility() {
    if (this.inputType == 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }


  clicklogingoogle(){
    this.auth.signInWithPopup(new GoogleAuthProvider()).then(rez =>{
      this.router.navigateByUrl('/')
    })

  }

}
