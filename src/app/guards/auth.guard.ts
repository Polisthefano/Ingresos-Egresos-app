import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from '../services/auth-service.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authServiceService:AuthServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authServiceService.isLog()
    //solo mandamos un observable que resuelve true o false entonces depende de que resuelva es si permite o no
  }
  canLoad():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return this.authServiceService.isLog().pipe(take(1));
    //el codigo es igual que canActivate es buena practica generar los dos metodos, entonces dependiendo de cual implementas en el routing
    //es que metodo activa. Otra diferencia es que canLoad necesita desuscribirse
  }
}
