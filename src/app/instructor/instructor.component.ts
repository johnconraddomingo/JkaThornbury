import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/300`);
  constructor() { }

  ngOnInit(): void {
  }

}
