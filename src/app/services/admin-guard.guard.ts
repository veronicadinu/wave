import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public auth: AngularFireAuth, public router: Router, public firestore: AngularFirestore) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user.pipe(
      switchMap(u => {
        if (u == null) {
          this.router.navigateByUrl('/login');
          return of(false);
        }
        return this.firestore.doc(`users/${u.email}`).valueChanges().pipe(
          take(1),
          map((d: any) => {
            if (d == null) {
              this.router.navigateByUrl('/login');
              return false;
            }
            if (d.role == 'admin') {
              return true;
            } else {
              this.router.navigateByUrl('/login');
              return false;
            }
          })
        );
      })
    );
  }
  
}
