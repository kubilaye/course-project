import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngr: Ingredient) {
    this.ingredients.push(newIngr);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    /* // this works but has an alternate
    for (let i = 0; i < ingredients.length; i++) {
      this.addIngredient(ingredients[i]);
    }
    */
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
