import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  @Input('bara') bara: MatDrawer;
  @Input('mobil') mobil: boolean;
  user: User;


  constructor(public auth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
    this.auth.user.subscribe(u => {
      this.user = u;
    });
  }

  clickMeniu() {
    this.bara.toggle();
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login')
    });
  }
}
