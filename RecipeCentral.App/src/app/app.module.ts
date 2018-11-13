import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Inject } from '@angular/core';

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
    EditableListItemComponent
  ]
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngDoBootstrap(app: ApplicationRef) {
    // If there is angularjs then bootstrap angularjs way.
    var angularjsAppRoot =  this.document.getElementById('ng-app');
    if (angularjsAppRoot) {
          let angularJsApp = angular.module('recipe.app');
          angularJsApp.directive('rcEditableListItem', downgradeComponent({component: EditableListItemComponent}));
          angularJsApp.factory('recipeService', downgradeInjectable(RecipeService));
          angularJsApp.factory('mvcDataService', downgradeInjectable(MvcDataService));
          this.upgrade.bootstrap(angularjsAppRoot, ['recipe.app']);
    }
    else{ 
      // Bootstrap Angular way
      app.bootstrap(AppComponent);
    }
  }
 }
