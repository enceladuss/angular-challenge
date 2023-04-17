import {Component, HostListener} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) {
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 100;
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
