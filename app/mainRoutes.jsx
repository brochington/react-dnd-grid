var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={require("./Application")}>
		<Route name="some-page" path="/some-page" handler={require("./SomePage")} />
		<Route name="gridtestpage" path="/gridtestpage" handler={require("./DndGridTestPage")} />
		<DefaultRoute name="home" handler={require("./Home")} />
	</Route>
);
