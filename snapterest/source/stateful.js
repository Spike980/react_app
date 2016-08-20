var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	getInitialState: function () {
		return  { isHeaderHidden: false };
	},

	handleClick: function () {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function () {
		var title = 'Stateful React Component';

		var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, title);
		var buttonElement = React.createElement('button', { className: 'btn btn-primary', key: 'button', onClick: this.handleClick }, 'Toggle-Header');

		if (this.state.isHeaderHidden) {
			return React.createElement('div', null, [buttonElement]);
		}

		return React.createElement('div', null, [buttonElement, headerElement]);
	}	
});

var ReactComponentElement = React.createElement(ReactClass);
var ReactComponent = ReactDOM.render(ReactComponentElement, document.getElementById('react-application'));
