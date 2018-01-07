import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
    selector: '[sideBar]'
})
class SideBar {
    constructor(el: ElementRef) {
        console.log("dozda")
        // $('.button-collapse').sideNav('show');
        // $('.button-collapse').sideNav({
        //     menuWidth: 300, // Default is 240
        //     edge: 'left', // Choose the horizontal origin
        //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        //   }
        // );
    }
}

export { SideBar }