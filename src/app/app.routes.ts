import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Galeria } from './pages/galeria/galeria';
import { Contador } from './pages/contador/contador';
import { Motivos } from './pages/motivos/motivos';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'motivos',
        component: Motivos,
    },
    {
        path: 'contador',
        component: Contador,
    }
];
