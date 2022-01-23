import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  category:any = []

 selectedCategory: any

 recovery = []

  constructor(public baza: AngularFirestore) { }

  ngOnInit(): void {
    this.baza.collection('categR').valueChanges({idField:'id'}).subscribe(rez =>{
      this.category = rez 
      this.selectedCategory = rez[0]
      this.readRecovery()
    })
  }


  clickcategory(c:any, event:MouseEvent){
    this.selectedCategory = c 
   this.readRecovery()
 }


  readRecovery(){
    this.baza.collection('recovery', x=>x.where("categoryId", "==", this.selectedCategory.id)).valueChanges({idField:'id'})
    .pipe(take(1))
    .subscribe(rez1 =>{
      this.recovery = rez1
    })
  }

}
