import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PhonePipe } from '../phone.pipe';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less'],
  providers: [PhonePipe],
})
export class StartPageComponent{
  constructor(private router: Router){

  }
  public value: string = "ankita";
  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
