export interface Route {
    path: string;
    name: string;
}
export const Routes = {
    HOME: {
        path: '/',
        name: 'Home'
    },
    CHARACTERES: {
        path: '/information/characteres',
        name: 'Characteres'
    }
}