import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngr: Ingredient) {
    this.ingredients.push(newIngr);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    /* // this works but has an alternate
    for (let i = 0; i < ingredients.length; i++) {
      this.addIngredient(ingredients[i]);
    }
    */
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
