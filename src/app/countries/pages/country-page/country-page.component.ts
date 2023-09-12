import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // Tap sirve para disparar efectos secundarios
        // tap()
        // Regresa un nuevo observable
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( ( country ) => {
        // console.log({country});
        if ( !country ) {
          // Si no tenemos un pais navega a la URL indicada
          return this.router.navigateByUrl('');
        }

        console.log('tenemos un pais');

        return this.country = country;
        // return;
      });
  }

  searchCountry( code: string ) {
    this.countriesService.searchCountryByAlphaCode( code )
    .subscribe(country => {
      console.log(country);
    });
  }

}
