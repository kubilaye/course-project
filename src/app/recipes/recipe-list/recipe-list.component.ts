import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onClickItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'http://via.placeholder.com/500x500'),
    new Recipe('Another Recipe', 'Another test', 'http://via.placeholder.com/500x500'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickRecipeItem(recipe: Recipe) {
    this.onClickItem.emit(recipe);
  }

}
