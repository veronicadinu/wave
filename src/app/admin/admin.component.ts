import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  training = []

  recovery = []

  constructor(public baza: AngularFirestore) { }

  ngOnInit(): void {
  this.baza.collection('training').valueChanges({idField:'id'}).subscribe(rez =>{
    this.training= rez
  })

  this.baza.collection('recovery').valueChanges({idField:'id'}).subscribe(rez1=>{
     this.recovery= rez1
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

}
