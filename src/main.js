$ = jQuery = require('jquery');	// This is saying there are two ways to reference jquery .. by 'jquery' AND by the '$'.
var React = require('react');
var Home = require('./components/homePage');

React.render(<Home />, document.getElementById('app'));
