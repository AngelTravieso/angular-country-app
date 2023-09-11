import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './shared/components/about-page/about-page.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';

// Definición de rutas
const routes: Routes = [
  {
    // Segmento de la URL
    path: '',
    // Componente a renderizar en esa URL
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'countries',
    // component: ContactPageComponent,
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule ),
  },
  {
    // Cualquier otra ruta redirige a /home
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    // Cuando es el router principal se configura con forRoot
    // forRoot crea y configura un modulo con todos los providers y directivas del router
    RouterModule.forRoot( routes ),
  ],
  exports: [
    // Exportamos el RouterModule que acabamos de configurar
    RouterModule,
  ],
})
export class AppRoutingModule { }
