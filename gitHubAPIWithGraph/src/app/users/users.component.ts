import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	private frm: FormGroup;
	private loading: boolean = false;

	constructor(private searchService: SearchService) {
		this.frm = new FormGroup({
			search: new FormControl(null, [Validators.required, Validators.minLength(3)])
		})
	}

	ngOnInit() {
	}

	searchKeyword(keyword: string) {
		if (keyword != null) {
			this.loading = true;
			this.searchService.searchGitUsers(keyword);
		} else {
			console.log("you must provide some keyword.");
		}
	}

	public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
	public pieChartData: number[] = [300, 500, 100];
	public pieChartType: string = 'pie';

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}

}
