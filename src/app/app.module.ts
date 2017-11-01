import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoundPipe } from './round.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
