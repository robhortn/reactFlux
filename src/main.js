$ = jQuery = require('jquery');	// This is saying there are two ways to reference jquery .. by 'jquery' AND by the '$'.
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

(function(win){

	"use strict";
	
	var App = React.createClass({
		render: function(){
			var Child;

			switch(this.props.route){
				case 'about' : Child = About; break;
				default: Child = Home;
			}

			return (
				<div>
					<Child/>
				</div>
			);
		}
	});

	function render(){
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);

	render();

	//React.render(<Home />, document.getElementById('app'));

})(window);