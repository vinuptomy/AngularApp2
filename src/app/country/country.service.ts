import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ICountry } from './country';





@Injectable({
  providedIn: 'root'
})
export class CountryService {

  
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
   private countryUrl = 'assets/country/country.json';
  //private countryUrl = 'api/country/country.json';
 // private countryUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population;region;alpha3code';

  constructor(private http: HttpClient) { }
// in real world scenario we can implement retry pattern with RxJs observable 

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getCountry(isoCode: string): Observable<ICountry | undefined> {
    return this.getCountries()
      .pipe(
        map((countries: ICountry[]) => countries.find(c => c.alpha3Code === isoCode))
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real case app, we  send the message to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
