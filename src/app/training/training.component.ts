import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

 category:any = []

 selectedCategory: any

 training = []

  constructor(public baza: AngularFirestore) { }

  ngOnInit(): void {
    this.baza.collection('categT').valueChanges({idField:'id'}).subscribe(rez =>{
      this.category = rez 
      this.selectedCategory = rez[0]
      this.readTraining()
    })
  }

  clickcategory(c:any, event:MouseEvent){
     this.selectedCategory = c 
    this.readTraining()
  }

  readTraining(){
    this.baza.collection('training', x=>x.where("categoryIds", "array-contains", this.selectedCategory?.id)).valueChanges({idField:'id'})
    //.pipe(take(1))
    .subscribe(rez1 =>{
      this.training = rez1
    })
  }

  getExtension(link: string) {
    if (link == null || link === '') {
      return null;
    }
    const linkFaraSemnulIntrebarii = link.substring(0, link.indexOf('?'));
    const splitByDot = linkFaraSemnulIntrebarii.split('.')
    return splitByDot[splitByDot.length - 1].toLowerCase();
  }
}
