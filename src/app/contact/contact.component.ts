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
    from: new FormControl('', [Validators.required, Validators.email]),
    to: new FormControl('alexandru536@gmail.com'),
    fromName: new FormControl('', [Validators.required]),
    toName: new FormControl('Barica Alexandru'),
    subject: new FormControl('Website email'),
    tel: new FormControl(),
    body: new FormControl('', [Validators.required]),
  })

  constructor(public baza: AngularFirestore, public snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  clicksave(){

    this.baza.collection('emails').add(this.contact.value).then(rez =>{
      this.snack.open('The messagges was sending', 'close', {duration: 5000})
      this.contact.reset()

    })

  }

}
