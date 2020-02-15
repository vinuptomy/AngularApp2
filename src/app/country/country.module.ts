import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CountryListComponent } from './country-list/country-list.component';




@NgModule({
  declarations: [
    CountryListComponent 
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    CountryListComponent
  ]
})
export class CountryModule { }
