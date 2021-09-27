import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/models/usuario.model';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private store:Store<AppState>) { }
  user:User|null=null
  $Destroy: Subject<boolean>= new Subject<boolean>()

  ngOnInit(): void {
    this.store.select('Auth').pipe(filter(user=>user.user!=null)).pipe(takeUntil(this.$Destroy)).subscribe((user:any) => {
      this.user = { ...user.user }
    })
  }
  ngOnDestroy() {
    this.$Destroy.next(true)
    this.$Destroy.unsubscribe()
  }


}
