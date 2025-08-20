
import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
		{ path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
			{ path: 'sports', loadComponent: () => import('./sports/sports.component').then(m => m.SportsComponent) },
			{ path: 'sports/:name', loadComponent: () => import('./sports/sport-detail.component').then(m => m.SportDetailComponent) },
		{ path: 'sports/:name', loadComponent: () => import('./sports/sport-detail.component').then(m => m.SportDetailComponent) },
	{ path: 'events', loadComponent: () => import('./events/events.component').then(m => m.EventsComponent) },
	{ path: 'timeline', loadComponent: () => import('./event-timelines/event-timelines.component').then(m => m.EventsTimelineComponent) },
	{ path: 'contact', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactComponent) },
	{ path: 'admin', loadComponent: () => import('./admin-panel/admin-panel.component').then(m => m.AdminComponent) },
		{ path: 'contact-us/council-detail', loadComponent: () => import('./contact-us/council-detail.component').then(m => m.CouncilDetailComponent) },
	{ path: 'honours', loadComponent: () => import('./honours/honours.component').then(m => m.HonoursComponent) },
	{ path: 'honours/:name', loadComponent: () => import('./honours/honour-detail.component').then(m => m.HonourDetailComponent) },
];
