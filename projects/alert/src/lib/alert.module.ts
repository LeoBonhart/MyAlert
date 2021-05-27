import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';
import { SmoothHeightDirective } from './smooth-height.directive';


@NgModule({
  declarations: [
    AlertComponent,
    SmoothHeightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [],
  bootstrap: [AlertComponent]
})
export class AlertModule { }
