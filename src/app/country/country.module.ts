import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';





@NgModule({
  declarations: [
    CountryListComponent, 
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CountryModule { }
