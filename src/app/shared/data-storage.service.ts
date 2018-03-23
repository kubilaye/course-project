import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.put(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes(),
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    console.log('https://ng-recipe-book-tr.firebaseio.com/recipes.json?auth=' + token);
    // part below isn't relaible because the token
    // might arrive after we make the next request, causing failure
    /*
    this.authService.getToken()
      .then(
        (token: string) => {
          myToken = token;
        }
      );
      */
    this.http.get(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json?auth=' + token,
    )
      .map(
        (value: Response) => {
          const recipes: Recipe[] = value.json();
          for (const recipe of recipes) {
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
