import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoundPipe } from './round.pipe';
import { SortHeightPipe } from './sort-height.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe,
    SortHeightPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
