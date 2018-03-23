import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes(): Observable<any> {
    return this.http.put(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
    );
  }

  getRecipes() {
    return this.http.get(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
    )
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }

}
