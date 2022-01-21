import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: User;
  isAdmin = false;
  _subscribes: Subscription[] = [];

  constructor(public auth: AngularFireAuth, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.auth.user.subscribe(u => {
      if(u == null){
        this.isAdmin = false;
        this._subscribes.forEach(s => s.unsubscribe());
      }
      this.user = u;
      this._subscribes.push(this.firestore.doc(`users/${this.user?.email}`).valueChanges().subscribe((doc: any) => {
        if (doc?.role == 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }));
    })
  }

}
