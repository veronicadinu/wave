import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(),
    msg: new FormControl('', [Validators.required]),
    date: new FormControl(new Date())
  })

  constructor(public baza: AngularFirestore, public snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  clicksave(){

    this.baza.collection('contact').add(this.contact.value).then(rez =>{
      this.snack.open('The messagges was sending', 'close', {duration: 5000})
      this.contact.reset()

    })

  }

}
