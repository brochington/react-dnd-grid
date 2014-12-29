var React = require("react");
var Reflux = require("../../node_modules/reflux/src");
var actions = require('./actions');

var DNDStore = Reflux.createStore({
	listenables: actions,
	pageOffset: null,
	itemTop: null,
	itemLeft: null,
	node: null,
	dragging: false,
	onStartDrag: function(event){
		console.log('onStartDrag');
		// this.node = viewComponent.getDOMNode();
		this.dragging = true;
		// console.dir(node);
		// this.pageOffset = this.node.getBoundingClientRect();
		// console.log(this.pageOffset);
		console.log(event.pageX);

	},
	onStopDrag: function(event){
		this.dragging = false;
		console.log(event.screenY);
		// console.log('onStopDrag');
	},
	onDrag: function(x, y){
		// console.log('drag');
		
		if(this.dragging){
			// console.log(x, y);
			// console.log(event.pageY, event.pageX);
			this.trigger((x - 60), (y - 60));
		}
	}
});

module.exports = DNDStore;