import { Component, OnInit } from '@angular/core';
import {Faq} from '../models/faq';
import {Video} from '../models/video';
import { SafePipe } from '../services/pipes'
  
@Component({
  selector: 'app-beginners',
  templateUrl: './beginners.component.html',
  styleUrls: ['./beginners.component.css'],
  providers: [SafePipe]
})
 
export class BeginnersComponent implements OnInit {
 

  // TODO: Move to a service

  public faqs:Array<Faq> = [
      new Faq( 1, 'What is Karate?', 'Karate means ‘Empty hand’ and is a traditional Japanese system of self-defence that employs blocks, punches, kicks, strikes, body evasion and occasional throws. It is an effective means of protecting oneself, but it also offers many other benefits such as: Aerobic conditioning Strengthens the body Strengthens the body Provides an outlet for stress Teaches children respect and discipline JKA Karate training can be broken into 3 areas of practice as follows: Kihon – Basic or fundamental training in all movements Kata – Pre-determined patterns of moves Kumite – Sparring'),
      new Faq( 2, 'What is Shotokan?', 'Shotokan is the name of the style or system of karate practiced by JKAA, it literally means ‘House of Shoto’ which was our founder, Funakoshi Gichin Shihan’s calligraphy pen name and became the name of the first official dojo in Tokyo in 1939.'),
      new Faq( 3, 'Who are the JKA?', 'The Japan Karate Association (JKA) are the World’s foremost authority on Karate. With a vast membership in over 100 countries, the JKA is the world’s largest and most prestigious karate organisation. JKA Australia is a member of this global organisation led by Nishimura Takaatsu Sensei 7th Dan.'),
      new Faq( 4, 'What is JKA Philosophy?', 'It is our belief that although Karate has a sporting aspect it is a traditional Japanese martial art and should be practiced as such. If required it is an effective form of self-defence and that it should instill in its practitioners discipline, control and confidence. Karate training must incorporate more than just the physical aspects; it must be firmly rooted in etiquette and respect. Our adult students tell us that karate improves sleep and increases energy. It offers a unique challenge not found in gyms. It is not just getting fit, but each level presents opportunities to learn and develop new skills. Parents tell us their children gain confidence and perform better in school.'),
  ];

  public videos:Array<Video> = [
      new Video (1, 'How to fold your Karate uniform', 'https://www.youtube.com/embed/LgIkks3ngDs?rel=0'),
      new Video (1, 'How to use your body in Karate', 'https://www.youtube.com/embed/KanPz-shqvw?rel=0'),
      new Video (1, 'How to kick faster', 'https://www.youtube.com/embed/iH5AF9DJH9U?rel=0'),
      new Video (1, 'Correct bowing for your body', 'https://www.youtube.com/embed/HN8nByO3y3c?rel=0'),
      new Video (1, 'Basic Karate training', 'https://www.youtube.com/embed/8FvzbPJ_iw8?rel=0'),
      new Video (1, 'The training for core strength', 'https://www.youtube.com/embed/umj4Pj0-ZsU?rel=0'),
      new Video (1, 'How to train for core strength', 'https://www.youtube.com/embed/vaxFe50LzCk?rel=0'),
      new Video (1, 'How to bow', 'https://www.youtube.com/embed/LgIkks3ngDs?rel=0'),
      new Video (1, 'How to tie Karate belt', 'https://www.youtube.com/embed/LgIkks3ngDs?rel=0'),

  ]
  

  constructor ( ){ 
    
  }

  ngOnInit(): void { 
  }

}


