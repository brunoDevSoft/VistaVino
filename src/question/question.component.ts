import { Component, Input } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {QuestionBase} from "../app/question-base";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent  {
@Input() question:QuestionBase<any>;
@Input() form:FormGroup;
  constructor() { }

 get IsValid(){
    return this.form.controls[this.question.key].valid;

 }

}
