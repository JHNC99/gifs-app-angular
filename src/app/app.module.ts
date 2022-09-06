import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, GifsModule, HttpClientModule],
  providers: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
