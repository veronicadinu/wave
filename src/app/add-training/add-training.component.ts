import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {

  id: string;

  add = new FormGroup({
    name: new FormControl(),
    text: new FormControl(),
    price: new FormControl(0),
    photo: new FormControl(),
  });


  constructor(public baza: AngularFirestore, public storages: AngularFireStorage, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(rez => {
      this.id = rez.id

      if (this.id != null) {
        this.baza.collection('training').doc(this.id).valueChanges().subscribe(rez1 => {
          this.add.patchValue(rez1);
        });
      }


    })


  }

  clicksave() {
    if (this.id == null) {
      // add
      this.baza.collection('training').add(this.add.value).then(rez => {
        this.router.navigateByUrl('/admin')
      })
    } else {
      //edit
      this.baza.doc(`training/${this.id}`).update(this.add.value).then(rez => {
        this.router.navigateByUrl('/admin')
      })
    }

  }


  changeImg(event: any) {
    const file = event.target.files[0]

    this.storages.upload(file.name, file).then(rez => {
      rez.ref.getDownloadURL().then(link => {
        this.add.controls.photo.setValue(link);
      })
    })
  }

  clickDeletePhoto() {
    this.add.controls.photo.setValue(null)
  }
}
