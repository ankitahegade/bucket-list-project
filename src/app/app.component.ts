import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor(private router: Router){}
  title = 'bucket-list';
  ngOnInit(){
    // this.router.navigate(['/item-details']);
  }
  public itemDetailsClick(): void {
    this.router.navigate(['/item-details']);
  }
}
