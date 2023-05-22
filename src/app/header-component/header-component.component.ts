import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.less']
})
export class HeaderComponentComponent {
  constructor(private router: Router){}
  navigateToList() {
    console.log("navigate click");
    this.router.navigate(['/bucket-list']);
  }
}
