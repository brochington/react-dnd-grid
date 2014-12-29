// Note: need to convert this to use some kind of flux structure. 

var React = require("react");
var Reflux = require("../../node_modules/reflux/src");
var actions = require('./actions');
var store = require('./store');
var V = require("../../node_modules/velocity-animate/velocity.min");
var VUI = require("../../node_modules/velocity-animate/velocity.ui.min");

console.log(actions);

var Draggable = React.createClass({
	getInitialState: function(){
		console.log(this);
		return {
			dragging: false,
			top: '20px',
			left: '20px'
		};
	},
	onMovement: function(x, y){
		console.log('onMovement', x, y);
		this.setState({
			top: y + "px",
			left: x + "px"
		});
	},
	componentDidMount: function(){
		console.log('componentDidMount!');
		console.log(store.listen(this.onMovement));
		console.log(store);
	},
	style: function(){
		return {
			position: 'fixed',
			left: this.state.left,
			top: this.state.top
		}
	},
	testFunc: function(event){
		actions.drag(event.pageX, event.pageY);
	},
	render: function(){
		console.log('render');
		return (
			<div style={this.style()}
				onMouseDown={actions.startDrag.bind(store)}
				onMouseMove={this.testFunc}
				onMouseUp={actions.stopDrag.bind(store)}>
				{this.props.children}
			</div>
		);
	}
});

var Dropzone = React.createClass({
	getInitialState: function(){
		console.log(this);
		return {};
	},
	render: function(){
		return (
			<div>
			{this.props.children}
			</div>
		);	
	}
});

module.exports = {
	Draggable: Draggable,
	Dropzone: Dropzone 
};