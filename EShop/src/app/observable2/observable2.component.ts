import { ObservableService } from './../services/observable.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-observable2',
	templateUrl: './observable2.component.html',
	styleUrls: ['./observable2.component.scss']
})
export class Observable2Component implements OnInit {

	constructor(private observableService: ObservableService) { }

	ngOnInit() {
	}

}
