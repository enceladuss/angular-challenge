import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent {

  @Input() public tableData = [
    {first: 'Dylan', last: 'Israel', age: 34, date: '10/25/1987', renting: false},
    {first: 'Sergei', last: 'Fubar', age: 25, date: '11/14/1996', renting: false},
    {first: 'Vlad', last: 'Money', age: 24, date: '01/15/1996', renting: true},
    {first: 'Oleg', last: 'Brovar', age: 24, date: '05/23/1997', renting: true},
    {first: 'Eduard', last: 'Shpil', age: 28, date: '07/07/1993', renting: false},
  ];
  public sortDirection = true;

  constructor() {
  }

  public sort(headerData: { key: string, value: any }): any {
    const {key, value} = headerData;

    this.sortDirection = !this.sortDirection;

    if (typeof value === 'boolean') {
      this.sortBoolean(key);
    } else if (typeof value === 'number') {
      this.sortNum(key);
    } else if (this.isDate(value)) {
      this.sortDate(key);
    } else if (typeof value === 'string') {
      this.sortString(key);
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);
    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: any): any {
    this.tableData.sort((a: any, b: any) => {
      if (this.sortDirection) {
        return new Date(a[key]).getTime() - new Date(b[key]).getTime();
      } else {
        return new Date(b[key]).getTime() - new Date(a[key]).getTime();
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((a: any, b: any) => this.sortDirection ? Number(a[key]) - Number(b[key]) : Number(b[key]) - Number(a[key]));
  }

  private sortNum(key: string): void {
    this.tableData.sort((a: any, b: any) => this.sortDirection ? Number(a[key]) - Number(b[key]) : Number(b[key]) - Number(a[key]));
  }

  private sortString(key: string): void {
    this.tableData.sort((a: any, b: any) => {
      const valA = a[key].toLowerCase();
      const valB = b[key].toLowerCase();

      if (this.sortDirection) {
        if (valA > valB) {
          return -1;
        }

        if (valB > valA) {
          return 1;
        }

        return 0;
      } else {
        if (valB > valA) {
          return -1;
        }

        if (valA > valB) {
          return 1;
        }

        return 0;
      }
    });
  }
}
