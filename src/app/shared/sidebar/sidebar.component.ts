import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  logOut(){
  this.authService.logout().then(resp=>{
    this.router.navigateByUrl('/login')
  })
  }

}
