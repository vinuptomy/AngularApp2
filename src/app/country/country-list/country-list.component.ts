import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../country/country';
import { CountryService } from  '../../country/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

 // pageTitle = Country List';
  pageTitle = ''
  imageWidth = 50;
  imageMargin = 2;
 // showImage = true;
  errorMessage = '';
 // listFiltersample= 'vinu';
  constructor(private countryService: CountryService) {

  }



  //Property to set filter by region selection
  _listFilter_region ='';
 

  get listFilter_region(): string {
    return this._listFilter_region;
  }

  set listFilter_region(value: string) {
    this._listFilter_region = value;
    this.filteredCountries = this.listFilter_region ? this.performFilter(this.listFilter,this.listFilter_region) : this.countries;
    
  }
// property to set filter list collection

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCountries = this.listFilter ? this.performFilter(this.listFilter,this.listFilter_region) : this.countries;
  }

  filteredCountries: ICountry[] = [];
  countries: ICountry[] = [];

  // filter country list method

  performFilter(filterBy: string,filterByRegion:string): ICountry[] {

    filterBy = filterBy.toLocaleLowerCase();
    filterByRegion = filterByRegion.toLocaleLowerCase();

    if (filterByRegion == "allregion"){

    return this.countries.filter((country: ICountry) =>
    (country.name.toLocaleLowerCase().indexOf(filterBy) !== -1));
      
    }
    
    if (filterByRegion != "allregion"){
      return this.countries.filter((country: ICountry) =>
      (country.region.toLocaleLowerCase().indexOf(filterByRegion) !== -1) && (country.name.toLocaleLowerCase().indexOf(filterBy) !== -1));
      }
  
      
  }


  ngOnInit() :void {

    this.countryService.getCountries().subscribe({
      next: countries => {
        this.countries = countries;
        this.filteredCountries = this.countries;
        //console.log('Json in component in it load: ' + JSON.stringify(countries));
      },
      error: err => this.errorMessage = err
    });
  }

}
