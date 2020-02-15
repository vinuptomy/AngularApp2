import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICountry } from '../../country/country';
import { CountryService } from  '../../country/country.service';

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
      next: country => this.country = country,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/country']);
  }

}
