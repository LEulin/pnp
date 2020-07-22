// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { ActivatedRoute } from "@angular/router";
// import { Services } from '../Services/services';

// @Component({
//   selector: 'app-edit-form',
//   templateUrl: './edit-form.component.html',
//   styleUrls: ['./edit-form.component.scss']
// })
// export class EditFormComponent implements OnInit {
//   @Output() event = new EventEmitter()
//   events: Event
//   eventname: string;
//   eventcategory: string;
//   speaker: string;
//   emcee: string;
//   date: string;
//   time: string;
//   venue: {
//     address: string;
//     building: string;
//     room: string;
//   }
//   description;

//   constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private eventService: Services) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.params['id']
//     // if (id == this.eventService.event.id) {
//     //   this.eventForm = this.formbuilder.group({
//     //     id: this.eventService.event.id,
//     //     name: this.eventService.event.name,
//     //     category: this.eventService.event.category,
//     //     speaker: this.eventService.event.speaker,
//     //     emcee: this.eventService.event.emcee,
//     //     date: this.eventService.event.date,
//     //     time: this.eventService.event.time,
//     //     duration: this.eventService.event.duration,
//     //     venue: this.formbuilder.group({
//     //       address: this.eventService.event.venue.address,
//     //       building: this.eventService.event.venue.building,
//     //       room: this.eventService.event.venue.room,
//     //     }),
//     //     description: this.eventService.event.description
//     //   });
//     console.log(id);
//   }

//   editForm() {
//     // if (id == this.eventService.event.id) {
//     //   this.eventForm = this.formbuilder.group({
//     //     id: this.eventService.event.id,
//     //     name: this.eventService.event.name,
//     //     category: this.eventService.event.category,
//     //     speaker: this.eventService.event.speaker,
//     //     emcee: this.eventService.event.emcee,
//     //     date: this.eventService.event.date,
//     //     time: this.eventService.event.time,
//     //     duration: this.eventService.event.duration,
//     //     venue: this.formbuilder.group({
//     //       address: this.eventService.event.venue.address,
//     //       building: this.eventService.event.venue.building,
//     //       room: this.eventService.event.venue.room,
//     //     }),
//     //     description: this.eventService.event.description
//     //   });
//   }
// }
