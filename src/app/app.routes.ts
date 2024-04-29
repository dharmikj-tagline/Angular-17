import { Routes } from '@angular/router';
import { AppRoute } from './model/route';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/all-feature/all-feature.component').then((c) => c.AllFeatureComponent)
    },
    {
        path: 'if-elseIf',
        loadComponent: () => import('./components/if-else-if/if-else-if.component').then((c) => c.IfElseIfComponent)
    },
    {
        path: AppRoute.FOR,
        loadComponent: () => import('./components/for/for.component').then((c) => c.ForComponent)
    },
    {
        path: AppRoute.SIGNAL,
        loadComponent: () => import('./components/signal/signal.component').then((c) => c.SignalComponent)
    },
    {
        path: AppRoute.DEFER,
        loadComponent: () => import('./components/defer/defer.component').then((c) => c.DeferComponent)
    },
    {
        path: AppRoute.SSR,
        loadComponent: () => import('./components/all-feature/all-feature.component').then((c) => c.AllFeatureComponent)
    },
    {
        path: AppRoute.DEMO,
        loadComponent: () => import('./components/chat-demo/chat-demo.component').then((c) => c.ChatDemoComponent)
    },
];
