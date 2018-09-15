import { PromiseService } from './../services/promise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent {

  constructor(private promiseService: PromiseService) { 
    let result = this.promiseService.add(2,3);
    console.log(result);
  }

}
