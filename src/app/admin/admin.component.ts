import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  training = []

  recovery = []

  categTraining =[]

  categRecovery = []

  emails = []
  


  constructor(public baza: AngularFirestore, public storage: AngularFireStorage) { }

  ngOnInit(): void {
  this.baza.collection('training').valueChanges({idField:'id'}).subscribe(rez =>{
    this.training= rez
  })

  this.baza.collection('recovery').valueChanges({idField:'id'}).subscribe(rez1=>{
     this.recovery= rez1
  })

  this.baza.collection('categT').valueChanges({idField:'id'}).subscribe(rez =>{
    this.categTraining = rez
  })

  this.baza.collection('categR').valueChanges({idField:'id'}).subscribe(rez =>{
    this.categRecovery = rez 
  })

  this.baza.collection('emails').valueChanges({idField:'id'}).subscribe(rez =>{
    this.emails = rez 
  })

  }

  clickdeleteTraining(id:any){
    this.baza.collection('training').doc(id).delete().then(rez =>{

    })
  }


  clickdeleteRecovery(id:any){
    this.baza.collection('recovery').doc(id).delete().then(rez =>{

    })
  }

  clickdeleteCategoryRecovery(id:any){
    this.baza.collection('categR').doc(id).delete().then(rez =>{

    })

  }

  clickdeleteCategoryTraining(id:any){
    this.baza.collection('categT').doc(id).delete().then(rez =>{

    })
  }


  clickdeleteEmails(id:any){
    this.baza.collection('emails').doc(id).delete().then(rez =>{
      
    })
  }

}
