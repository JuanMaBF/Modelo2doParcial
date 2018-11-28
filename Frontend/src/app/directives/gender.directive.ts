import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({ 
    selector: '[GenderDirective]' 
})
export class GenderDirective implements OnInit {

    @Input() gender: string;

    constructor(public el: ElementRef) {
    }

    ngOnInit() {

        if(this.gender == "Hombre") {
            this.el.nativeElement.style.color = '#770ad5';
            this.el.nativeElement.style.fontFamily = "monospace";
        } else if(this.gender == "Mujer") {
            this.el.nativeElement.style.color = '#d5870a';
            this.el.nativeElement.style.fontFamily = "Courier New";
        } else if(this.gender == "Unisex") {
            this.el.nativeElement.style.color = '#d50a0a';
            this.el.nativeElement.style.fontFamily = "Times New Roman";
        } 
    }

}