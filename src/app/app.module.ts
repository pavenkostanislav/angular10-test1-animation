import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExamplePanelComponent } from './example-panel/example-panel.component';
import { TabNextDirective } from './tab.directive';

@NgModule({
  declarations: [AppComponent, ExamplePanelComponent, TabNextDirective],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
