import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

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
                this.router.onSameUrlNavigation ="ignore";
  }
  
  
  
    
  

  ngOnInit() {
    this.router.onSameUrlNavigation ="reload";
  const param = this.route.snapshot.paramMap.get('alpha3Code');
  var border='';
  //param ? param :  this.getRouteParam(); 
  this.route.paramMap.subscribe(
   (params: ParamMap) => {
     border= params.get('border');
     console.log('inside block border: '+border);
     
   }
 )
   console.log('param: '+param);
  
    if (param) {
      const isoCode = param;
      this.getCountry(isoCode);  
      
    }

    else if(border){
      const isoCode = border;
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
onBorderClick(border:string):void{
 // console.log('/country/border/'+border);
  //this.router.onSameUrlNavigation ="reload";
 // this.router.navigate(['/country/border/'+border]);
}
}
