import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private user: any = {};

	constructor(private router: Router) { }

	ngOnInit() {
	}

	checkLogin() {
		if (this.user.name == "tanishraj.47@gmail.com" && this.user.password == "12345") {
			console.log("Logged in successfully.");
			this.router.navigate(['/Welcome']);
			
		} else{
			console.log("Invalid credentials");
		}
	}

}
