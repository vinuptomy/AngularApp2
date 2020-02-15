import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country/country-list/country-list.component';

import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent
    
  ],
  imports: [
    BrowserModule,
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
