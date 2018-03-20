import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  index: number;
  paramsSubscription: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    );
  }

  onClickToShoppingList() {
    this.recipeService.onIngredientsSentToShoppingList(this.recipe.ingredients);
  }

  onClickEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.index, 'edit'], {relativeTo: this.route});
    // this.router.navigate(['/recipes', this.index, 'edit']); // suspicious, might not work in different setups
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
