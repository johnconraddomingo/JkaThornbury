import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutJkaComponent } from './about-jka/about-jka.component';
import { InstructorComponent } from './instructor/instructor.component';
import { DojoKunComponent } from './dojo-kun/dojo-kun.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { KataComponent } from './kata/kata.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent },
  {path: 'about-jka', component: AboutJkaComponent }, 
  {path: 'instructor', component: InstructorComponent }, 
  {path: 'dojo-kun', component: DojoKunComponent }, 
  {path: 'syllabus', component: SyllabusComponent }, 
  {path: 'kata', component: KataComponent }, 
  {path: 'contact-us', component: ContactUsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutJkaComponent]