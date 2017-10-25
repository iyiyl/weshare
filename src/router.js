import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
	const IndexPage = dynamic({
		app,
		component: () => import('./routes/IndexPage'),
	});

	const Users = dynamic({
		app,
		models: () => [
			import('./models/users'),
		],
		component: () => import('./routes/Users'),
	});

	const Topic = dynamic({
		app,
		models: () => [
			import('./models/topic'),
		],
		component: () => import('./routes/Topic'),
	});


	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={IndexPage} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/topic" component={Topic} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;