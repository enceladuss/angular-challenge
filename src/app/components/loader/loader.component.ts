import {Component, Input, OnInit} from '@angular/core';
import {LoaderType} from './models/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  private loading = 'Loading';
  private loadingPeriods = '.';

  constructor() {
  }

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  ngOnInit(): void {
    if (this.loaderType === 'Loading') {
      this.updateLoaderPeriods();
    }


  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.';
          currentStep = 0;
          break;
      }
    }, 300);
  }
}
