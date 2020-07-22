import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant } from "../../Services/data_models";
import { Services } from "../../Services/services"
import { Subscription } from "rxjs";
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListsComponent implements OnInit, OnDestroy {
  events: Event[];
  event: any;
  isViewingList = true;
  getEventSubcribe: Subscription

  constructor(private eventService: Services, private router: Router) { }

  ngOnInit() {
    this.getEventSubcribe = this.eventService.getEvents().subscribe(res => {
      this.events = res
    })
  }

  ngOnDestroy() {
    this.getEventSubcribe.unsubscribe()
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event)
  }

  updateEvent(event: Event) {
    this.events.forEach(element => {
      if (element.id === this.event.id) {
        this.eventService.updateEvent(event)
      }
    })
  }
  viewEvent(event: Event) {
    this.router.navigate(['eventList', event.id]);
  }
}