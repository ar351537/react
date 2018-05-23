import React from 'react';
import ReactDOM from 'react-dom';
//import {Route, hashHistory} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './views/home';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={HashRouter}>
			<Route path="/" component={Home} />
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);