import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('myForm') myForm: NgForm;
  editSubscription: Subscription;
  editMode = false;
  activeItemIndex: number;
  activeItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.activeItemIndex = index;
        this.activeItem = this.slService.getIngredient(index);
        this.editMode = true;
        this.myForm.setValue({
          name: this.activeItem.name,
          amount: this.activeItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const ingr = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.activeItemIndex, ingr);
    } else {
      this.slService.addIngredient(ingr);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

}
