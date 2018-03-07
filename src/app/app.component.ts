import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showRecipes = true;
  showShoppingList = false;

  headerMenuClicked(name) {
    if (name === 'recipes') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (name === 'shopping-list') {
      this.showRecipes = false;
      this.showShoppingList = true;
    }
  }
}
