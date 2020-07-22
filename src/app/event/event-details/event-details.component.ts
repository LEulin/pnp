import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2'
import { Services } from '../../Services/services';
import { Event, Participant } from '../../Services/data_models';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;
  @Output() id = new EventEmitter()
  @Output() deletedata = new EventEmitter()
  @Output() updatedata = new EventEmitter()

  constructor(private eventservice: Services, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.eventservice.getEvent(this.route.snapshot.params.id)
      .then(event => this.event = event as Event)
  }

  sendId(data: any) {
    this.id.emit(data);
  }

  deleteData(eventdata: any) {
    this.deletedata.emit(eventdata)
  }

  viewList() {
    this.router.navigate(['eventList'])
  }

  addParticipant(participant: Participant) {
    console.log(participant);

    this.event.participants.push(participant);
    this.eventservice.updateEvent(this.event)

  }
}
