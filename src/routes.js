import React from 'react';
import {
    Switch  ,
    Route,
} from 'react-router-dom';

import App from './pages/App';
import Persone from './pages/Persone';

export const MAIN_ROUTE = 'MAIN_ROUTE'
export const PEOPLE_ROUTE = 'PEOPLE_ROUTE'


export const routes = [
    {
        id: MAIN_ROUTE,
        path: '/',
        exact: true,
        component: App
    },
    {
        id: PEOPLE_ROUTE,
        path: '/people/:id',
        exact: false,
        component: Persone
    }
];

export default function Routes(){
    return (
    <Switch>
        {routes.map(r => {
            const {id, ...props} = r;
            
            return (
                    <Route  key={id} {...props} />
                );
            })}
    
    </Switch>
    )
} 