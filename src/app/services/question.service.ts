import {Injectable} from "@angular/core";
import {QuestionBase} from "../question-base";
import {DropDownQuestion} from "../question-dropdown";

@Injectable()
export class QuestionService {
    getQuestions(){
    let questions : QuestionBase<any>[]= [

        new DropDownQuestion({
            key:'cru',
            label: 'entrer le nom du cru',
            required: true,
            options: [
                    {key:"33522Margot", value: "Chateau Margot"},
                { key:"33440Latour",value: "Chateau Latour"}

            ],
            order: 1

            }),
        new DropDownQuestion({
            key:'cepage',
            label: 'entrer le Cépage',
            required: true,

            options: [
                {key:"syra", value: "Syra"},
                { key:"cabernet-franc",value: "cabernet franc"}

            ],
            order: 2

        })
    ];
    return questions.sort((a,b)=>a.order - b.order);
    }

}