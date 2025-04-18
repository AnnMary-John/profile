// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./home/home.component').then(m => m.HomeComponent),
    },
    { path: 'about', component: AboutmeComponent },
];
