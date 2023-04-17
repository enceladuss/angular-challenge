import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTableHeadClass]'
})
export class TableHeadClassDirective {

  constructor(private renderer: Renderer2, private elem: ElementRef) {
  }

  @HostListener('click', ['$event.target']) onClick(element): void {
    const clickedElement = this.elem.nativeElement;
    // console.log(this.elem.nativeElement)
    // this.renderer.addClass(this.elem.nativeElement, 'sorting');
    // console.log(this.elem.nativeElement)

    // element.parentNode.querySelectorAll('th').forEach((item) => {
    //   if (!(item === element)) {
    //     item.classList.remove('sorting', 'straight', 'reversed');
    //   }
    // });
    console.log(clickedElement.classList.contains('sorting'))
    console.log(clickedElement.classList)
    if (clickedElement.classList.contains('sorting')) {
      console.log(1)
      if (clickedElement.classList.contains('straight')) {
        console.log('straight');
        this.renderer.removeClass(clickedElement, 'straight');
        this.renderer.addClass(clickedElement, 'reversed');
      } else {
        console.log('reversed');
        this.renderer.removeClass(clickedElement, 'reversed');
        this.renderer.addClass(clickedElement, 'straight');
      }
    } else {
      console.log(2)
      this.renderer.addClass(clickedElement, 'sorting');
      this.renderer.addClass(clickedElement, 'straight');
      console.log(clickedElement)
      // element.classList.add('sorting');
      // element.classList.add('straight');
    }
    //
    // console.log(element)
    // console.log('////')

  }

}
