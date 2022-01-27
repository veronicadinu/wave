import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    file: new FormControl(),
    categories: new FormControl([],[Validators.required]),
    categoryIds: new FormControl([])
  });

  category: any = []


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

    this.baza.collection('categT').valueChanges({idField:'id'}).subscribe(rez2 =>{
      this.category = rez2
    })


  }

  clicksave() {
    this.add.controls.categoryIds.setValue(
      this.add.controls.categories.value.map(x => x.id)
    );
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


  changeFile(event: any) {
    const file = event.target.files[0]

    this.storages.upload(file.name, file).then(rez => {
      rez.ref.getDownloadURL().then(link => {
        this.add.controls.file.setValue(link);
      })
    })
  }

  clickDeleteFile() {
    this.add.controls.file.setValue(null)
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1?.id === o2?.id;
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
