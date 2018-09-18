import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f') frm;
  constructor() { }

  ngOnInit() {
  }

  displayRecords(){
    console.log("Form values are", this.frm.value);
  }

}
