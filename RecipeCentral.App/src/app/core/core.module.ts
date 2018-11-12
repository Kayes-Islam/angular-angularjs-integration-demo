import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AppComponent
  ]
})
export class CoreModule { }
