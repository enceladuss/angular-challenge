import {Component, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {

  @Input() public baseHref = 'https://www.AngularChallenge.com';
  @Input() public hashTags: string[] = ['JavaScript', 'TypeScript', 'Angular'];

  constructor(public titleService: Title) {
  }

  public getTwitterUrl(): string {
    const base = this.getBaseWithHashTagAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()}`);

    return `${base}${message}`;
  }

  private getBaseWithHashTagAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=yurined&url=${route} `;
  }
}
