import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule,MatSelectModule, MatIconModule,MatDividerModule,  MatFormFieldModule, MatInputModule,MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent 
    
  ],
  imports: [
   
     MatIconModule,
     MatGridListModule, 
     MatFormFieldModule, 
     MatToolbarModule,
      MatInputModule,
    MatCardModule, 
    MatDividerModule,
    MatButtonModule, 
    MatSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    RouterModule.forRoot([
      
      { path: 'country', component: CountryListComponent  },
      { path: '', redirectTo: 'country', pathMatch: 'full' },
      { path: '**', redirectTo: 'country', pathMatch: 'full' }
    ]),
    CountryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
