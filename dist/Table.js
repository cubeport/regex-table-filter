'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this));

    _this.state = {
      data: _immutable2.default.List(),
      filteredData: _immutable2.default.List()
    };
    _this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(_this);

    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        data: _immutable2.default.fromJS(this.props.data).toList(),
        filteredData: _immutable2.default.fromJS(this.props.data).toList()
      });
    }
  }, {
    key: 'filterData',
    value: function filterData(event) {
      event.preventDefault();
      var regex = new RegExp(event.target.value, 'i');
      var filtered = this.state.data.filter(function (datum) {
        return datum.get('title').search(regex) > -1 || datum.get('body').search(regex) > -1;
      });

      this.setState({
        filteredData: filtered
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var filteredData = this.state.filteredData;

      var prettyRows = filteredData.map(function (datum) {
        return _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            datum.get("id")
          ),
          _react2.default.createElement(
            'td',
            null,
            datum.get("title")
          ),
          _react2.default.createElement(
            'td',
            null,
            datum.get("body")
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'Table container' },
        _react2.default.createElement(
          'p',
          { style: { padding: "2rem 0 0 0" } },
          'This example shows how to search and filter any generic type of data.  It only matches a pattern using simple case insensitive regular expressions. Thanks to ',
          _react2.default.createElement(
            'a',
            { href: 'http://jsonplaceholder.typicode.com/posts' },
            'JSON Placeholder'
          ),
          ' for example data.'
        ),
        _react2.default.createElement(
          'p',
          { style: { padding: "0 0 2rem" } },
          'Please view the ',
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/jmfurlott/regex-table-filter' },
            'Github'
          ),
          ' for more information.'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          onChange: this.filterData.bind(this),
          placeholder: 'Search' }),
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'th',
              null,
              'ID'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Title'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Body'
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            prettyRows
          )
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;