import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'dashboard/selected-clients',
        loadChildren: () => import('./features/selected-clients/selected-clients.module').then(m => m.SelectedClientsModule)
    },
];
