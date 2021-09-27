import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthServiceService } from '../../services/auth-service.service';
import { UnsetUserAction } from '../../auth/auth.actions';
import { UnsetIngresoEgreso } from 'src/app/ingreso-egreso/ingreso-egreso.actions';
import { User } from '../../models/usuario.model';
import { AppState } from '../../app.reducer';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,OnDestroy {
  user: User | null = null
  $Destroy:Subject<boolean>=new Subject<boolean>()
  constructor(private store:Store<AppState>,private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.store.select('Auth').pipe(filter(user=>user.user!=null)).pipe(takeUntil(this.$Destroy)).subscribe((user:any) => {
      this.user = { ...user.user }
    })
  }
  ngOnDestroy() {
    this.$Destroy.next(true)
    this.$Destroy.unsubscribe()
  }

  logOut(){
  this.authService.logout().then(resp=>{

    this.authService.suscription.unsubscribe(); //corta el socket con firebase que trae los items de firebase

    this.router.navigateByUrl('/login')
  })

  }

}
