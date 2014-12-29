var React = require("react");
var Link = require("react-router").Link;
var _ = require("lodash");

require('!style!css!../../node_modules/bootstrap/dist/css/bootstrap.css');

var DndGrid = React.createClass({
	getInitialState: function(){
		var myArray = Array(parseInt(this.props.columns));

		return {
			numberOfColumns: parseInt(this.props.columns)
		};
	},
	render: function(){
		var s = this.state,
			Columns = _.map((new Array(s.numberOfColumns)), function(column){
				var columnClass = "col-sm-" + (12 / s.numberOfColumns);
				console.log(columnClass);
				return (
					<div className={columnClass}>
						<p>This is a column</p>
					</div>
				);
			});

		return (
			<div>
				<h2>This is the DND Grid!</h2>
				<div className="row">
					{Columns}
				</div>
			</div>
		);
	}
});

module.exports = DndGrid;