import { Component } from '@angular/core';
import { OnInit}from '@angular/core';
import {degustService} from './services/degust.service';
import {QuestionService} from "./services/question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wineapp';

  degustations: any[];
  questions:any[];
  constructor(private degustDonne: degustService,private squest :QuestionService){
    this.questions = squest.getQuestions();


  }
  ngOnInit() {
    this.degustations= this.degustDonne.degustations;
  }
}
