import { Component,Input, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import  {QuestionBase} from '../question-base';
import {QuestionControlService} from "../services/question-control.service";

@Component({
  selector: 'app-saisie-degust',
  templateUrl: './saisie-degust.component.html',
  providers:[ QuestionControlService],
  styleUrls: ['./saisie-degust.component.css']
})
export class SaisieDegustComponent implements OnInit {
  @Input() questions: QuestionBase<any>[]=[];
  form:FormGroup;
  payLoad="";


  constructor(private qcs :QuestionControlService) { }

  ngOnInit() {
    this.form= this.qcs.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad= JSON.stringify(this.form.value);
  }
}
