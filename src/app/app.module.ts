import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DegustationComponent } from './degustation/degustation.component';
import { degustService} from './services/degust.service';
import { SaisieDegustComponent } from './saisie-degust/saisie-degust.component';
import {QuestionComponent} from "../question/question.component";
import {QuestionService} from "./services/question.service";

@NgModule({
  declarations: [
    AppComponent,
    DegustationComponent,
    SaisieDegustComponent,
      QuestionComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [degustService,QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
