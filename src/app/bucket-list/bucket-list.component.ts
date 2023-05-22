import { Component } from "@angular/core";
import { BucketList } from "../model/bucket.model";
import { Router } from "@angular/router";

@Component({
    selector: 'bucket-list',
    templateUrl: './bucket-list.component.html',
    styleUrls: ['./bucket-list.component.less'],
})
export class BucketListComponent {
    constructor(private router: Router){}
        bucketList!: BucketList[];
        public isShowDetails: boolean = false;
        bucketItem!: BucketList;

    ngOnInit() {
        this.bucketList = [
            {
                title: "Learning Guitar",
                steps: ["start"],
            },
            {
                title: "Learning Dance",
                steps: ["join a Dance class"],
            }];

        console.log(this.bucketList);    
    }

    public showDetails(bucketItem: BucketList) {
        this.bucketItem = bucketItem;
        this.router.navigateByUrl('/item-details', { state: { bucketItem: this.bucketItem } });
        this.isShowDetails = true;
        console.log(this.isShowDetails);
    }    
}