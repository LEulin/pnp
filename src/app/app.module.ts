import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListsComponent } from './event/events/events-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { AddeventComponent } from './event/addevent/addevent.component';
import { Services } from './Services/services'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
// import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsListsComponent,
    EventDetailsComponent,
    ParticipantsListComponent,
    AddeventComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    // EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
  ],
  providers: [
    Services,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
