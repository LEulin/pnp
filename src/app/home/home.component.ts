import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UserAccount } from '../Services/data_models';
import { Services } from '../Services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: UserAccount = {
    username: 'admin',
    password: 'admin'
  }
  username;
  password;

  constructor(private router: Router, private eventService: Services) { }

  ngOnInit(): void {
    console.log(this.user);
  }

  login(datavalue) {
    if (datavalue.username == null || datavalue.password == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!!',
      })
    } else if (datavalue.username == this.user.username && datavalue.password == this.user.password) {
      this.eventService.updateCurrentUser(datavalue)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You are successfully logged in!',
        showConfirmButton: false,
        timer: 1200
      })
      this.router.navigate(['eventList']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Incorrect username or password!!',
      })
    }
  }
}

