import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  recipeSelectedSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeSelectedSubscription = this.recipeService.recipeSelected
      .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  ngOnDestroy() {
    this.recipeSelectedSubscription.unsubscribe();
  }

}
