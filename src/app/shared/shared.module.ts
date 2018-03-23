import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
  ],
  exports: [
    CommonModule, // ??
    DropdownDirective, // to make this directive accessible outside
  ],
})
export class SharedModule { }
