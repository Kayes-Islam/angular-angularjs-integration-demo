import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableListItemComponent } from './components/editable-list-item/editable-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recipe.service';
import { MvcDataService } from './services/mvc-data.service';
import { TextEditorDialogComponent } from './components/text-editor-dialog/text-editor-dialog.component';

@NgModule({
  declarations: [EditableListItemComponent, TextEditorDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RecipeService,
    MvcDataService
  ],
  exports: [
    EditableListItemComponent
  ]
})
export class SharedModule { }
