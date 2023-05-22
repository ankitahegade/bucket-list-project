import { Component, Input, OnInit } from '@angular/core';
import { BucketList } from '../model/bucket.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit{
  constructor() {}
@Input() bucketItem!: BucketList;
title: string = '';
public ngOnInit(){
  console.log(this.bucketItem);
}

public onItemDetailsClick(title: string) {
  this.title = title;
  console.log(title);
}
}
