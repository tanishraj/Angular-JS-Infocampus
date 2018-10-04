import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()

export class SearchService{

	private apiRoot = "https://api.github.com/users/";
	private result : object;
	private loading : boolean;
	
	constructor(private http : Http) { 
		this.result = null;
		this.loading = false;
	}

	searchGitUsers(keyword : string){
		return new Promise((resolve, reject) => {
			let apiURL = this.apiRoot + keyword;

			this.http.get(apiURL)
			.toPromise()
			.then(
				(res) => {
					console.log("Response is ", res.json());
					this.result = res.json();
					resolve();
				},
				(err) => {
					console.log("git user", err.json().message);
					reject();
				}
			)
		})
	}

}