import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {
  @Output() event = new EventEmitter()
  eventForm: FormGroup;
  submitted = false
  modal = false

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.eventForm = this.formbuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      speaker: ['', Validators.required],
      emcee: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      venue: this.formbuilder.group({
        address: ['', Validators.required],
        building: ['', Validators.required],
        room: ['', Validators.required],
      }),
      participants: new FormControl([]),
      onlineUrl: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  submitForm(data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event successfully added!',
      showConfirmButton: false,
      timer: 1500
    })
    this.modal = false
    this.submitted = true
    this.event.emit(data)
    console.log(data);
    this.eventForm.reset()
  }
}
