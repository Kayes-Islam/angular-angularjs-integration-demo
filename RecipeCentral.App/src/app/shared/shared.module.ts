import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableListItemComponent } from './components/editable-list-item/editable-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditableListItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditableListItemComponent
  ]
})
export class SharedModule { }
