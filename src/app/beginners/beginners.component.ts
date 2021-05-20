import { Component, OnInit } from '@angular/core';
import {Faq} from '../models/faq';
import {Video} from '../models/video';
import { SafePipe } from '../services/pipes';
import {SourcesService } from '../services/sources.service';
  
@Component({
  selector: 'app-beginners',
  templateUrl: './beginners.component.html',
  styleUrls: ['./beginners.component.css'],
  providers: [SafePipe]
})
 
export class BeginnersComponent implements OnInit { 
 
  constructor (private sourcesService:SourcesService ){ }  
  faqs: Faq[] = [];
  videos: Video[] = [];

  ngOnInit(): void { 
    this.faqs = this.sourcesService.getFaqs();
    this.videos = this.sourcesService.getVideos();
  }
}