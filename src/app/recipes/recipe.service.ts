import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'http://via.placeholder.com/500x500'),
    new Recipe('Another Recipe', 'Another test', 'http://via.placeholder.com/500x500'),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice(); // .slice() is for getting an instance of the array
  }
}
