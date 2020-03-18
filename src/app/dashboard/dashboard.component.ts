import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  
  
  constructor(private router: Router) { }
  
  onProductClick(): void{
    this.router.navigate(['./product']);
}



  ngOnInit(): void {
    
  }


}
