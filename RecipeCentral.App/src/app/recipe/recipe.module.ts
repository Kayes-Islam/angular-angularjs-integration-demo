import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeEditorComponent } from './components/recipe-editor/recipe-editor.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipeEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RecipeEditorComponent
  ]
})
export class RecipeModule { }
