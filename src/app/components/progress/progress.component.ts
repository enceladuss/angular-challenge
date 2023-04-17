import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent {

  constructor() { }

  @Input() public value = 0;
  @Input() public max = 100;

}
