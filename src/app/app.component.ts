import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingresoEgresoApp';

constructor(private authService:AuthServiceService){
  this.authService.initAuthListener() //lo llamo aca a ese metodo que se suscribe al estado del usuario, pq este app component es lo primero
                                      //que se crea y entonces se crea un socket mientras vive la app
}

}