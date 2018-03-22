import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes(): Observable<any> {
    return this.http.put(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
    );
  }

}
