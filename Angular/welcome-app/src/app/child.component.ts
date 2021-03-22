import { Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'child-tag',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent{
 // tslint:disable-next-line:no-inferrable-types
 msg: string = 'This is a child component';
}
