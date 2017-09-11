import { RouterModule, Routes } from '@angular/router';

import {
	AboutComponent,
	HomeComponent,
	WebItemComponent,
	SearchComponent
} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'producto/:id', component: WebItemComponent },
	{ path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
