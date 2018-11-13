import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeDetails } from '../models/recipe-details';
import { MvcDataService } from './mvc-data.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient, private mvcDataService: MvcDataService) { }

  get(id: number): Observable<RecipeDetails>{
    return this.httpClient.get<RecipeDetails>(`${this.mvcDataService.baseHref}/api/recipe/${id}` );      
  }

  save(recipe: RecipeDetails): Observable<RecipeDetails>{
    if(recipe.id)
      return this.httpClient.put<RecipeDetails>(`${this.mvcDataService.baseHref}/api/recipe/${recipe.id}`, recipe);
    else
      return this.httpClient.post<RecipeDetails>(`${this.mvcDataService.baseHref}/api/recipe`, recipe);      
  }
}
