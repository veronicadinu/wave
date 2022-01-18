import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobile = false;
  areBarsHidden = false;

  constructor(public mediaObserver: MediaObserver, public router: Router) {

  }

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe(() => {
      this.isMobile = this.mediaObserver.isActive('xs');
    });

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/login' || e.url == '/register' || e.url == '/forgot') {
          this.areBarsHidden = true;
        } else {
          this.areBarsHidden = false;
        }
      }
    });
  }
}
