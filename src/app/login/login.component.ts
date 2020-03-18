import { Component, OnInit,Input} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(private router: Router) { }

   onLoginClick(): void{
    this.router.navigate(['./dashboard']);
}

  ngOnInit(): void {
  }

}
