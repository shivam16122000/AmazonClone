import './App.css';
import Login from './Login';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS', authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
