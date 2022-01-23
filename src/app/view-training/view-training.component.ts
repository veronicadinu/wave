import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.scss']
})
export class ViewTrainingComponent implements OnInit {

  training:any = {}

  id: string;

  constructor(public baza: AngularFirestore, public route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(rez =>{
       this.id = rez.id

       this.baza.collection('training').doc(this.id).valueChanges({idField:'id'}).subscribe(rez1 =>{
              this.training= rez1
       })
     })
  }

}
