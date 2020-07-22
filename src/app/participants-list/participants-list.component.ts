import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Swal from 'sweetalert2'
import { Services } from '../Services/services';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  // @Input() event: any
  @Input() participants: any;
  @Output() backEvent = new EventEmitter();
  @Output() addparticipantevent = new EventEmitter();
  fullName;
  position;
  company;

  constructor(private service: Services) { }

  ngOnInit(): void {
  }

  returnToTable() {
    this.backEvent.emit();
  }
  register(data) {  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Participant has been successfully added!',
      showConfirmButton: false,
      timer: 1500
    })
    this.addparticipantevent.emit(data);
    this.fullName = '';
    this.position = '';
    this.company = '';
  }

  deletePart(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    // .then((result) => {
      // const index = this.events.indexOf(data)
      // console.log("index: " + index + " is deleted!")
      // this.eventService.deleteEvent(index)
      // if (result.value) {
      //   Swal.fire(
      //     'Deleted!',
      //     'Your file has been deleted.',
      //     'success'
      //   )
      // }
    // })
  }

  updatePart(){
    Swal.fire({
      title: 'Are you sure you want to edit this?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    })
    // .then((result) => {
    //   // const index = this.events.indexOf(data)
    //   // console.log("index: " + index + " is deleted!")
    //   // this.eventService.deleteEvent(index)
    //   if (result.value) {
    //     Swal.fire(
    //       'Updated!',
    //       'Your file has been updated.',
    //       'success'
    //     )
    //   }
    // })
  }
}
