import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-degustation',
  templateUrl: './degustation.component.html',
  styleUrls: ['./degustation.component.css']
})
export class DegustationComponent  {
  @Input() lenom: string;
  @Input() millesime: string;
  constructor() { }

}
