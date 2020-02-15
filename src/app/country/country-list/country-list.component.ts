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

// property to set filter list collection

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCountries = this.listFilter ? this.performFilter(this.listFilter) : this.countries;
  }

  filteredCountries: ICountry[] = [];
  countries: ICountry[] = [];

  // filter country list method

  performFilter(filterBy: string): ICountry[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((country: ICountry) =>
    country.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  //sample function to test component interaction
  toggleImage(): void {
   // this.showImage = !this.showImage;
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
