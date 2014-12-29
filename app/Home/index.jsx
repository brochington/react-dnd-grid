var React = require("react");
var Link = require("react-router").Link;

module.exports = React.createClass({
	render: function() {
		return <div>
			<h2>Homepage</h2>
			<p>This is the homepage.</p>
			<p>Try to go to a todo list page:</p>
			<ul>
				<li><Link to="gridtestpage">dnd Grid test page</Link></li>
			</ul>
		</div>;
	}
});
