var React = require('react');
var ReactDOM = require('react-dom');

var Application = require('./components/Application.react');
var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(<Application />, document.getElementById('react-application'));

/*
var h1 = React.createElement('h1', {className: 'header', key: 'header'}, "This is React");
var p = React.createElement('p', {className: 'content', key: 'content'}, "And That's how it works");




//var createListItemElement = React.createFactory('li');

//var listItemElement1 = createListItemElement({className: 'item1', key: 'item-1'}, "Item 1");
var listItemElement1 = React.DOM.li({className: 'item1', key: 'item-1'}, "Item 1");
var listItemElement2 = React.DOM.li({className: 'item2', key: 'item-2'}, "Item 2");
var listItemElement3 = React.DOM.li({className: 'item3', key: 'item-3'}, "Item 3");

var reactFragment2 = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul', {className: 'listOfItems'}, reactFragment2);
var reactFragment = [h1, p, listOfItems];

var section = React.createElement('section', {className: 'container'}, reactFragment);

var listOfItems = <ul className="list-of-items">
					<li className="item1">Item 1</li>
					<li className="item2">Item 2</li>
					<li className="item3">Item 3</li> 
				  </ul>;

ReactDOM.render(listOfItems, document.getElementById('react-application'));
*/