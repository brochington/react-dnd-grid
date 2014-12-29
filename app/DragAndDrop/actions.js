var React = require("react");
var Reflux = require("../../node_modules/reflux/src");

var DNDActions = Reflux.createActions([
	'startDrag',
	'stopDrag',
	'drag'
]);

module.exports = DNDActions;