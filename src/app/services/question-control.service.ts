import  {Injectable} from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {QuestionBase} from "../question-base";
@Injectable()
export class QuestionControlService {
constructor(){;
}
// le retour de cette methode va etre passer au template

toFormGroup( questions: QuestionBase<any>[]){
let group:any={};

questions.forEach(question=>{
                                console.log(JSON.stringify(question));
                            group[question.key]=question.required ? group[question.key]=new FormControl(question.value ||'',
                                Validators.required): new FormControl(question.value || '');




});
    return new FormGroup(group);

}

}