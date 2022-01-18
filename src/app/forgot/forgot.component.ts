import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgot = new FormGroup({
  email: new FormControl('', [Validators.email, Validators.required])
  })

  constructor(public auth: AngularFireAuth, public router: Router, public snach: MatSnackBar) { }

  ngOnInit(): void {
  }

  clicksend(){
    this.auth.sendPasswordResetEmail(this.forgot.controls.email.value).then(rez =>{
      this.router.navigateByUrl('/')
      
    })

  }

}
