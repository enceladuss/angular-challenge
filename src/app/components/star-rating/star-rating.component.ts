import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  @Input() public rating = 5;

  public get fullStars(): string[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill('');
  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;
    return (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;
  }

  public get emptyStars(): string[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);

    return Array(totalEmptyStars).fill('');
  }
}
