import React from 'react';
import User5 from './user5'
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";


const UserDetail = ({ match }) => {
    return (
        <div>
            <div>
            <Link to={`${match.url}user5`}>User5</Link>
            </div>
            <Switch>
                <Route path={`${match.path}user5`} component={User5} />
            </Switch>
        </div>
    );
}


export default UserDetail;
