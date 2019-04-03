import  {QuestionBase} from "./question-base";

export class DropDownQuestion extends QuestionBase<string>{
//
controlType='DropDown';
options :{key : string,value : string}[]=[];
    constructor ( options :{}={})
    {
    super(options);
    this.options= options['options'] || [];

    }
}