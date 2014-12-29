var React = require("react");
var Link = require("react-router").Link;
var Draggable = require('../DragAndDrop/DragAndDrop.jsx').Draggable;
var Dropzone = require('../DragAndDrop/DragAndDrop.jsx').Dropzone;
var DndGrid = require("../DndGrid/index.jsx");


var DndGridTest = React.createClass({

	render: function(){
		var modules = _.map(new Array(1), function(){
			return <Draggable>
				<div className="small-box">This is a small box</div>
			</Draggable>;
		});

		return (
			<div>
				<h2>DND Grid Test</h2>
				<div className="row">
					<div className="col-sm-6">
						<DndGrid columns='4' ></DndGrid>
					</div>
					<div className="col-sm-6">
						{modules}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DndGridTest;