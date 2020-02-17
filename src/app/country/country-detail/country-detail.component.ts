import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICountry } from '../../country/country';
import { CountryService } from  '../../country/country.service';

import { Observable, throwError , from} from 'rxjs';
import { catchError, tap, map, pluck } from 'rxjs/operators';



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {


  pageTitle = 'Country Detail';
  errorMessage = '';
  country: ICountry | undefined;
  


  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryService) {
  }
  

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('alpha3Code');
    if (param) {
      const isoCode = param;
      this.getCountry(isoCode);      


    }
  }

   
  getCountry(isoCode: string) { 
    this.countryService.getCountry(isoCode).subscribe({
      next: country =>{ 
        this.country =  this.transformCountryresult(country)
      },     
      error: err => this.errorMessage = err
    });
  }

  transformCountryresult(country:ICountry):ICountry{
       country.arrLanguages="";
       country.arrCurrencies= "" ;
      
       Object.keys(country.languages).forEach(key => {          
       country.arrLanguages= country.arrLanguages + country.languages[key].name + ',';  
           
});

Object.keys(country.currencies).forEach(key => {          
 
  country.arrCurrencies= country.arrCurrencies + country.currencies[key].name + ',';      
});
country.arrLanguages =  country.arrLanguages.substring(0,country.arrLanguages.length-1);
country.arrCurrencies =  country.arrCurrencies.substring(0,country.arrCurrencies.length-1);
    return country;
  }
  
  /**
  * 
  * 
  *  next: countries => {
        this.countries = countries;
        this.filteredCountries = this.countries;
        //console.log('Json in component in it load: ' + JSON.stringify(countries));
      },
  *  
    getCountry(isoCode: string) {
    this.countryService.getCountry(isoCode).subscribe({
      next: country => this.country = country,
      error: err => this.errorMessage = err
    });
  }
     * 
  getCountry(isoCode: string) {
    from(this.countryService.getCountry(isoCode))
    .pipe(
      map (country => ({ ...country.languages,name:name})),
      
     
    
    ).subscribe(console.log)
  }
*/
  onBack(): void {
    this.router.navigate(['/country']);
  }

}
