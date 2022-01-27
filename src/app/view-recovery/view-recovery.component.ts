import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recovery',
  templateUrl: './view-recovery.component.html',
  styleUrls: ['./view-recovery.component.scss']
})
export class ViewRecoveryComponent implements OnInit {

  recovery:any = {}

  id:string;

  constructor(public baza: AngularFirestore, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(rez =>{
       this.id = rez.id

       this.baza.collection('recovery').doc(this.id).valueChanges({idField:'id'}).subscribe(rez1 =>{
       this.recovery= rez1
       })
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
