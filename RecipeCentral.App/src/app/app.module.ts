import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Inject, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/components/app/app.component';
import { UpgradeModule, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { DOCUMENT, APP_BASE_HREF } from '@angular/common';

import * as angularjs from 'angular';
import { EditableListItemComponent } from './shared/components/editable-list-item/editable-list-item.component';
import { RecipeService } from './shared/services/recipe.service';
import { RecipeModule } from './recipe/recipe.module';
import { MvcDataService } from './shared/services/mvc-data.service';
import { RecipeEditorComponent } from './recipe/components/recipe-editor/recipe-editor.component';

import { createCustomElement } from '@angular/elements';

declare var angular: angular.IAngularStatic;

export function appBaseHrefFactory(mvcDataService: MvcDataService){
  return mvcDataService.baseHref + "/app/";
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
    CoreModule,
    RecipeModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      deps: [MvcDataService],
      useFactory: appBaseHrefFactory
    }
  ],
  entryComponents: [
    AppComponent,
    RecipeEditorComponent
  ]
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule,
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector
  ) {
  }

  ngDoBootstrap(app: ApplicationRef) {
    // If there is angularjs then bootstrap angularjs way.
    var jqueryAppRoot =  this.document.getElementById('jquery-app');
    if (jqueryAppRoot) {
      const recipeEditorElement = createCustomElement(RecipeEditorComponent, { injector: this.injector });
      customElements.define('rc-recipe-editor', recipeEditorElement);
    }
    else{ 
      // Bootstrap Angular way
      app.bootstrap(AppComponent);
    }
  }
 }
