import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() public title = '';
  public active = false;

  constructor() {
  }

  public open(): void {
    this.active = true;
  }

  public close(): void {
    this.active = false;
  }
}
