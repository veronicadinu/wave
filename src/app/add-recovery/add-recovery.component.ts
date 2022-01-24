import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-recovery',
  templateUrl: './add-recovery.component.html',
  styleUrls: ['./add-recovery.component.scss']
})
export class AddRecoveryComponent implements OnInit {

  add = new FormGroup({
    name: new FormControl(),
    text: new FormControl(),
    video: new FormControl(),
    price: new FormControl(),
    categories: new FormControl([], [Validators.required]),
    categoryIds: new FormControl([])

  })

  id: string;

  category: any = []

  constructor(public baza: AngularFirestore, public storage: AngularFireStorage, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(rez => {
      this.id = rez.id

      if (this.id != null) {
        this.baza.collection('recovery').doc(this.id).valueChanges({ idField: 'id' }).subscribe(rez1 => {
          this.add.patchValue(rez1)
        })
      }
    })

    this.baza.collection('categR').valueChanges({ idField: 'id' }).subscribe(rez2 => {
      this.category = rez2
    })
  }

  clicksave() {
    this.add.controls.categoryIds.setValue(
      this.add.controls.categories.value.map(x => x.id)
    );
    if (this.id == null) {
      //add
      this.baza.collection('recovery').add(this.add.value).then(rezz => {
        this.router.navigateByUrl('/admin')
      })
    } else {
      //edit
      this.baza.doc(`recovery/${this.id}`).update(this.add.value).then(rez => {
        this.router.navigateByUrl('/admin')
      })
    }

  }

  changeVideo(event: any) {

    const file = event.target.files[0]


    this.storage.upload(file.name, file).then(rez => {
      rez.ref.getDownloadURL().then(link => {
        this.add.controls.video.setValue(link);
      })
    })

  }

  clickDeleteVideo() {
    this.add.controls.video.setValue(null)
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1?.id === o2?.id;
  }

}
