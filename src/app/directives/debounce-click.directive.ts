import {Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy{

  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  constructor() { }

  public ngOnInit(): void {
    const debounceTimeMs = 500;

    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeMs)
    ).subscribe((value: any) => this.debounceClick.emit(value));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }

}
