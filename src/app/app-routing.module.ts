import { Routes, RouterModule } from '@angular/router';
import { PageDefault } from './PageDefault'
import { About } from './about';
import { MovieRoute } from './movieroute';
import { ModuleWithProviders }   from '@angular/core';

const routes: Routes = [
   {path: 'about', component: About},
   {path: 'movie', component: MovieRoute},
   {path: '', component: MovieRoute},
   {path: '**', component: PageDefault}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
