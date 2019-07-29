import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-get-label',
  templateUrl: './get-label.component.html',
  styleUrls: ['./get-label.component.scss']
})
export class GetLabelComponent implements OnInit {

  labelList:any;
  constructor(private labelservice:LabelService) { }

  ngOnInit() {
    this.getLabel();
  }

  getLabel(){
    this.labelservice.getRequest("labelservice/getLabel").subscribe(
      (response: any) => {

        this.labelList = response;
        console.log("labelList=>", this.labelList);
      });
  }
}
