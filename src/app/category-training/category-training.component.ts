import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-training',
  templateUrl: './category-training.component.html',
  styleUrls: ['./category-training.component.scss']
})
export class CategoryTrainingComponent implements OnInit {

  add = new FormGroup({
    name: new FormControl(),
    text: new FormControl(),
    photo: new FormControl()

  })

  id: string;

  constructor(public baza: AngularFirestore, public storage: AngularFireStorage, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(rez =>{
      this.id = rez.id

      if(rez.id != null){
        this.baza.collection('categT').doc(this.id).valueChanges({idField:'id'}).subscribe(rez1 =>{
               this.add.patchValue(rez1)
        })

      }
    })
  }


  clicksave(){
    if (this.id == null){
      //add
      this.baza.collection('categT').add(this.add.value).then(rez =>{
        this.router.navigateByUrl('/admin')
      })

    }else{
     /// edit
     this.baza.collection('categT').doc(this.id).update(this.add.value).then(rez =>{
      this.router.navigateByUrl('/admin')
     })

    }

  }

  changeImg(event:any){

    const file = event.target.files[0]

    this.storage.upload(file.name, file).then(rez =>{
      rez.ref.getDownloadURL().then(link =>{
        this.add.controls.photo.setValue(link)
      })
    })

  }

  clickDeletePhoto(){
    this.add.controls.photo.setValue(null)
  }

}
