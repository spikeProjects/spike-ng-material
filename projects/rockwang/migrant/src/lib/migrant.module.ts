import { NgModule } from '@angular/core';
import { MigrantComponent } from './migrant.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [MigrantComponent, PopupComponent],
  imports: [
  ],
  exports: [MigrantComponent]
})
export class MigrantModule { }
