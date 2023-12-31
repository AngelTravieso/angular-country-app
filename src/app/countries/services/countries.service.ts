import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode( code: string ): Observable<Country |  null>  {
        const url = `${ this.apiUrl }/alpha/${ code }`;

        return this.http.get<Country[]>( url )
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null),
                catchError( error => of(null ))
            );
    }

    // Buscar por capital
    searchCapital( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${ term }`;
        return this.http.get<Country[]>(url)
            .pipe(
                // toma el error y devuelve un arreglo vacio en caso de que haya error
                // catchError( error => {
                //     console.log(error);

                //     return of([]);
                // })
                catchError( error => of([]) )
            );
    }

    // Buscar por país
    searchCountry( term: string): Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${ term }`;
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( error => of([] ))
            );
    }

    // Buscar por región
    searchRegion( region: string) : Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${ region }`
        return this.http.get<Country[]>( url )
            .pipe(
                catchError( error => of([] ))
            );
    }

}