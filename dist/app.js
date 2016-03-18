'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table.js');

var _Table2 = _interopRequireDefault(_Table);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_superagent2.default.get('http://jsonplaceholder.typicode.com/posts').end(function (err, res) {
    _react2.default.render(_react2.default.createElement(_Table2.default, { data: res.body }), document.getElementById("app"));
});