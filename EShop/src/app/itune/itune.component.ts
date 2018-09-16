import { searchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-itune',
	templateUrl: './itune.component.html',
	styleUrls: ['./itune.component.scss']
})
export class ItuneComponent implements OnInit {
	private loading:boolean = false;

	constructor(private searchService: searchService) { }

	ngOnInit() {
	}

	doSearch(term: string) {
		this.loading = true;
		this.searchService.searchItuneAPI(term);
	}

}
