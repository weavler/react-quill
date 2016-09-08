/*
React-Quill-Custom v0.0.1
https://github.com/weavler/react-quill
*/
try{
	/**
	 * Might not work on server-side rendering
	 * Quill v1.0.0 do not handle non-DOM cases.
	 * This will cause error `document is undefined` during server start
	 * 
	 */
	module.exports = require('./component');
	module.exports.Mixin = require('./mixin');
	module.exports.Toolbar = require('./toolbar');
	var quill = require('quill')
	var Parchment = quill.import('parchment');
	var FontStyle = new Parchment.Attributor.Style('size', 'font-size', { scope: Parchment.Scope.INLINE });
	var FontFamilyStyle = new Parchment.Attributor.Style('font', 'font-family', { scope: Parchment.Scope.INLINE });
	quill.register(FontStyle, true);
	quill.register(FontFamilyStyle, true);
	module.exports.Quill = quill;
}
catch(e){
	/**
	 * If it fails to start with `document is undefined`, provide dummy components
	 * This will be solved during client side rendering.
	 */
	//console.log(e)
	var React = require('react')
	module.exports = React.createClass({ render: ()=>(false)})
	module.exports.Mixin = ""
	module.exports.Toolbar = ""
	module.exports.Quill = "";
}
