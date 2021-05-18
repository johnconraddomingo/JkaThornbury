import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorComponent } from './instructor/instructor.component';
import { DojoKunComponent } from './dojo-kun/dojo-kun.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { KataComponent } from './kata/kata.component';
import { ContactUsComponent } from './contact-us/contact-us.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, InstructorComponent, DojoKunComponent, SyllabusComponent, KataComponent, ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
