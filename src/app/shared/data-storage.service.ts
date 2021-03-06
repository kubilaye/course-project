import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes(): Observable<any> {
    const token = this.authService.getToken();

    /*return this.httpClient.put(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        observe: 'body',
        params: new HttpParams().set('auth', token),
      },
    );*/
    const request = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
        // params: new HttpParams().set('auth', token), // this is not getting appended using the AuthInterceptor
      });
    return this.httpClient.request(request);
  }

  getRecipes() {
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
    this.httpClient.get<Recipe[]>(
      'https://ng-recipe-book-tr.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json',
      },
    )
      .map(
        (recipes) => {
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
