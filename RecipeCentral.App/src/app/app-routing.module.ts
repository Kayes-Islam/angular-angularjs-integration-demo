import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RecipeEditorComponent } from './recipe/components/recipe-editor/recipe-editor.component';

const routes: Routes = [
  { path: 'recipe/:id', component: RecipeEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
