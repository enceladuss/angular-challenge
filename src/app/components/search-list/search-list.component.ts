import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent {

  public searchTerm = '';
  public hasBeenSelected = false;

  @Input() public items: string[] = [];

  public updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;

    if (!this.searchTerm || !this.items) {
      this.hasBeenSelected = false;
    }
  }
}
