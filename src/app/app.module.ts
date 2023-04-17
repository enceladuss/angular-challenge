import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressComponent } from './components/progress/progress.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { FilterTermPipe } from './pipes/filter-term.pipe';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortTableComponent } from './components/sort-table/sort-table.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { TableHeadClassDirective } from './directives/table-head-class.directive';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressComponent,
    StarRatingComponent,
    ScrollToTopComponent,
    TruncatePipe,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    ModalComponent,
    DebounceClickDirective,
    DebounceSearchComponent,
    FilterTermPipe,
    SearchListComponent,
    SimpleTableComponent,
    PagingComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    TableHeadClassDirective,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
