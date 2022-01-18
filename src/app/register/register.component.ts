import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(public auth: AngularFireAuth, public router: Router) { }


  inputType = "password"


  ngOnInit(): void {
  }

  clickregister(){
    this.auth.createUserWithEmailAndPassword(this.register.controls.email.value, this.register.controls.password.value).then(rez =>{
      this.router.navigateByUrl('/login')
    })


  }


  clickVisibility() {
    if (this.inputType == 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

}
