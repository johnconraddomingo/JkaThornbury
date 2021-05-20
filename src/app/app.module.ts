import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { InstructorComponent } from './instructor/instructor.component';
import { BeginnersComponent } from './beginners/beginners.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { KataComponent } from './kata/kata.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ScheduleComponent } from './schedule/schedule.component'; 
import { SafePipe } from './services/pipes';



@NgModule({
  declarations: [
    AppComponent, 
    SafePipe,
    routingComponents 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,  
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}