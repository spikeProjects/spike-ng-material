import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule, MaterialCommonModule } from './shared';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
