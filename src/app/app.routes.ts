import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Galeria } from './pages/galeria/galeria';
import { Contador } from './pages/contador/contador';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'galeria',
        component: Galeria,
    },
    {
        path: 'contador',
        component: Contador,
    }
];
