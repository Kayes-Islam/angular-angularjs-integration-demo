import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails } from 'src/app/shared/models/recipe-details';
import { MvcDataService } from 'src/app/shared/services/mvc-data.service';
import { isNumber } from 'util';

@Component({
  selector: 'rc-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {

  public model: RecipeDetails = null;
  public error: string;
  public newIngredient: string = '';
  public newStep: string = '';
  constructor(
    private recipeService: RecipeService, 
    private route: ActivatedRoute, 
    private mvcDataService: MvcDataService
  ) { }

  ngOnInit() {
    this.route
      .paramMap.subscribe(params => {
        let idStr = params.get("id");

        if(!idStr)
          return;

        let id = Number.parseInt(params.get("id"));
        this.recipeService.get(id)
          .subscribe(recipe =>{
            this.model = recipe;
          });
      })
  }

  submit() {
    this.recipeService.save(this.model)
        .subscribe(() =>{
            window.location.href = this.mvcDataService.baseHref + "/admin";
        },
        (error) =>{
            this.error = "Error Occurred.";
        });
  }

  addIngredient() {
    if(this.newIngredient)
      this.model.ingredients.push(this.newIngredient);

    this.newIngredient = '';
  }

  addStep() {
    if(this.newStep)
      this.model.steps.push(this.newStep);
    
    this.newStep = '';
  }
}
