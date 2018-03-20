import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Tasty schnitzel with fries',
      'http://via.placeholder.com/500x500',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Burger',
      'Burger with cheddar cheese',
      'http://via.placeholder.com/500x500',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheddar slices', 1)
      ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // .slice() is for getting an instance of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  onIngredientsSentToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsToShoppingList(ingredients);
  }
}