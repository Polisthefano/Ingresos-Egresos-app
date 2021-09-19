import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthServiceService } from '../../services/auth-service.service';
import { UnsetUserAction } from '../../auth/auth.actions';
import { UnsetIngresoEgreso } from 'src/app/ingreso-egreso/ingreso-egreso.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private store:Store,private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  logOut(){
  this.authService.logout().then(resp=>{
   
    this.store.dispatch(new UnsetUserAction())
    this.authService.suscription.unsubscribe(); //corta el socket con firebase que trae los items
    this.store.dispatch(new UnsetIngresoEgreso())
    this.router.navigateByUrl('/login')
  })
 
  }

}
