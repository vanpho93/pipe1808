import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoundPipe } from './round.pipe';
import { SortHeightPipe } from './sort-height.pipe';
import { SortUserPipe } from './sort-user.pipe';
import { FilterAgePipe } from './filter-age.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
    SortHeightPipe,
    SortUserPipe,
    FilterAgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
