import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipesComponent} from './recipes.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes), // note that we use forChild instead of forRoot because it's only for root module
  ],
  exports: [
    RouterModule,
  ],
})
export class RecipesRoutingModule { }
