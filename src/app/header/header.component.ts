import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Services } from '../Services/services';
import Swal  from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>; 

  title = 'Passerelles Numeriques Philippines Events';
  constructor(private router: Router, private eventService: Services) { }

  ngOnInit(): void {
  }

  logout(){
    this.eventService.updateCurrentUser({
      username: '',
      password: ''
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You are successfully logged out!',
      showConfirmButton: false,
      timer: 1200
    })
    this.router.navigate(['login'])
  }
}
