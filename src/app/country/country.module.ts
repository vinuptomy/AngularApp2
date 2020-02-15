import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';




@NgModule({
  declarations: [
    
    CountryDetailComponent 
    
  ],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule.forChild([
      { path: 'country', component: CountryListComponent },
      {
        path: 'country/:alpha3Code',       
        component: CountryDetailComponent
      }
    ]),

  ],
  exports: [
    
    CountryDetailComponent
  ]
})
export class CountryModule { }
