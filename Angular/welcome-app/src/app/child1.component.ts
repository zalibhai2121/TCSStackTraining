import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'child1-tag',
    template: `
        <div>
        This is second Child component
        {{msg}}
        </div>
    `,
    styles: ['div{color:red}']
})

// tslint:disable-next-line:component-class-suffix
export class Child1 {
    msg = 'welcome to second child component';
}
