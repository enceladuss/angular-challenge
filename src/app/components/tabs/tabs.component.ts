import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  constructor() {
  }

  @Input() public tabs: { title: string, active: boolean }[] = [];
  @Output() public selectTabIndex = new EventEmitter<number>();

  public changeTab(selected: { title: string, active: boolean }, index: number): void {

    this.tabs.forEach((tab) => {
      tab.active = (selected === tab);
    });

    this.selectTabIndex.emit(index);
  }
}
