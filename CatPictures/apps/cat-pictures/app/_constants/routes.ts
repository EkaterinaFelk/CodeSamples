import type { Route } from 'next';

export const API_URL = 'https://api.thecatapi.com/v1/images';

export const Routes: Record<string, Route>  = {
    home: '/',
    about: '/about',
    dashboard: '/dashboard',
    details: '/dashboard/details' as Route,
}