import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
		{ path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
	{ path: 'sports', loadComponent: () => import('./sports/sports.component').then(m => m.SportsComponent) },
	{ path: 'events', loadComponent: () => import('./events/events.component').then(m => m.EventsComponent) },
	{ path: 'timeline', loadComponent: () => import('./event-timelines/event-timelines.component').then(m => m.EventsTimelineComponent) },
	{ path: 'contact', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactComponent) },
	{ path: 'admin', loadComponent: () => import('./admin-panel/admin-panel.component').then(m => m.AdminComponent) },
];
