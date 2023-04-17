import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';



@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {

  @Input() public tableData = [
    {first: 'Dylan', last: 'Israel', date: '25/10/1987'},
    {first: 'Sergei', last: 'Fubar', date: '14/11/1996'},
    {first: 'Vlad', last: 'Money', date: '15/01/1998'},
    {first: 'Oleg', last: 'Brovar', date: '23/05/1997'},
    {first: 'Eduard', last: 'Shpil', date: '17/07/1993'},
  ];
  @Input() public enabledSorting = false;
  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();


  constructor(private renderer: Renderer2) {
  }

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({value, key});
  }
}
