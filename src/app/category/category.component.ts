import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categTraining =[]

  categRecovery = []

  constructor(public baza: AngularFirestore) { }

  ngOnInit(): void {
    this.baza.collection('categT').valueChanges({idField:'id'}).subscribe(rez =>{
      this.categTraining = rez
    })

    this.baza.collection('categR').valueChanges({idField:'id'}).subscribe(rez =>{
      this.categRecovery = rez 
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

}
