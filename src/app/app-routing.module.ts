import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsListsComponent } from './event/events/events-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { EditFormComponent } from './edit-form/edit-form.component';
import { EventRouteActivator } from './event/event-route.activator.service'
import { EventDetailsComponent } from './event/event-details/event-details.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    component: HomeComponent,
    pathMatch: "full" 
  },
  {
    path: "eventList",
    component: EventsListsComponent,
    canActivate: [ EventRouteActivator ]
  },
  {
    path: "eventList/:id",
    component: EventDetailsComponent,
    pathMatch: "full" 
  },
  // {
  //   path: "editEvent/:id",
  //   component: EditFormComponent
  // },
  { path : 'notFound', component: NotFoundComponent, pathMatch: "full" },
  { path : '**', redirectTo: 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
