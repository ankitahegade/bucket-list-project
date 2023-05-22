import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-step-details',
    templateUrl: './step-details.component.html',
    styleUrls: ['./step-details.component.less']
})
export class StepDetailsComponent {
    @Input() stepTitle: string = '';

    public ngOnInit() {
        console.log(this.stepTitle);
    }
}