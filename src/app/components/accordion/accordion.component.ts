import {Component, Input} from '@angular/core';
import {AccordionItem} from './accordion-item-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() public items: AccordionItem[] = [];

  constructor() {
  }

  public toggle(item: AccordionItem, items: AccordionItem[]): void {
    if (items) {

      if (item.isExpanded) {
        for (const elem of items) {
          elem.isExpanded = false;
        }
      } else {
        for (const elem of items) {
          elem.isExpanded = false;
        }
        item.isExpanded = true;
      }
    }
  }

}
