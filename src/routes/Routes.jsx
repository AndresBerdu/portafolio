import React from 'react';
import {
    Routes as Router,
    Route,
} from "react-router";

/* imports pages */
import { Homepage } from '../pages/Homepage';

const Routes = () => {
    return (
        /* Routes and layouts pages*/
        <Router>
            {/* Default pages */}
            <Route index path='/' element={<Homepage />} />
        </Router>
    )
}

export { Routes }
