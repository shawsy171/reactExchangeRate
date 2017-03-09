import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

import Root from './layout/root'
import Home from './pages/home'
import About from './pages/about'
import Exchange from './pages/exchange'

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Root}>
                    <IndexRoute component={Home} />
                    <Route path={'home'} component={Home}/>
                    <Route path={'about'} component={About}/>
                    <Route path={'exchange'} component={Exchange}/>
                </Route>
            </Router>
        )
    }
}

// <IndexRoute component={Root} />

ReactDOM.render(<App />, document.getElementById('app'));