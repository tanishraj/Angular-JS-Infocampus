import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private user: any = {};

	constructor() { }

	ngOnInit() {
	}

	checkLogin() {
		if (this.user.name == "tanishraj.47@gmail.com" && this.user.password == "12345") {
			console.log("Logged in successfully.");
		} else{
			console.log("Invalid credentials");
		}
	}

}
