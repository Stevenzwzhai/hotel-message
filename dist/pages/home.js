'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _coSearch = require('./../components/home/co-search.js');

var _coSearch2 = _interopRequireDefault(_coSearch);

var _coHeader = require('./../components/home/co-header.js');

var _coHeader2 = _interopRequireDefault(_coHeader);

var _coList = require('./../components/home/co-list.js');

var _coList2 = _interopRequireDefault(_coList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
    _inherits(_default, _wepy$page);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "coList": { "xmlns:v-bind": "", "v-bind:itemHeight.once": "itemHeight" } }, _this.$events = {}, _this.components = {
            coSearch: _coSearch2.default,
            coHeader: _coHeader2.default,
            coList: _coList2.default
        }, _this.data = {
            itemHeight: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onReady',
        value: function onReady() {
            var self = this;
            wx.createSelectorQuery().select('.goodsItem').fields({
                size: true
            }, function (res) {
                console.log(res);
                self.itemHeight = res.height;
                self.$broadcast('setHeight', {
                    height: res.height
                });
            }).exec();
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjb1NlYXJjaCIsImNvSGVhZGVyIiwiY29MaXN0IiwiZGF0YSIsIml0ZW1IZWlnaHQiLCJzZWxmIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiZmllbGRzIiwic2l6ZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCIkYnJvYWRjYXN0IiwiZXhlYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4TEFFR0EsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDBCQUF5QixZQUE1QyxFQUFWLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBWTtBQUNEQyx3Q0FEQztBQUVEQyx3Q0FGQztBQUdEQztBQUhDLFMsUUFNTEMsSSxHQUFNO0FBQ0ZDLHdCQUFZO0FBRFYsUzs7Ozs7a0NBSUk7QUFDTixnQkFBSUMsT0FBTyxJQUFYO0FBQ0FDLGVBQUdDLG1CQUFILEdBQXlCQyxNQUF6QixDQUFnQyxZQUFoQyxFQUE4Q0MsTUFBOUMsQ0FBcUQ7QUFDakRDLHNCQUFNO0FBRDJDLGFBQXJELEVBRUcsVUFBVUMsR0FBVixFQUFlO0FBQ2RDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQU4scUJBQUtELFVBQUwsR0FBa0JPLElBQUlHLE1BQXRCO0FBQ0FULHFCQUFLVSxVQUFMLENBQWdCLFdBQWhCLEVBQTZCO0FBQ3pCRCw0QkFBT0gsSUFBSUc7QUFEYyxpQkFBN0I7QUFHSCxhQVJELEVBUUdFLElBUkg7QUFTSDs7OztFQXhCd0IsZUFBS0MsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgY29TZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL2NvLXNlYXJjaCdcbiAgICBpbXBvcnQgY29IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL2NvLWhlYWRlcidcbiAgICBpbXBvcnQgY29MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9jby1saXN0J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAkcHJvcHMgPSB7XCJjb0xpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOml0ZW1IZWlnaHQub25jZVwiOlwiaXRlbUhlaWdodFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9IHtcbiAgICAgICAgICAgIGNvU2VhcmNoLFxuICAgICAgICAgICAgY29IZWFkZXIsXG4gICAgICAgICAgICBjb0xpc3RcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGE9IHtcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcuZ29vZHNJdGVtJykuZmllbGRzKHtcbiAgICAgICAgICAgICAgICBzaXplOiB0cnVlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHNlbGYuaXRlbUhlaWdodCA9IHJlcy5oZWlnaHRcbiAgICAgICAgICAgICAgICBzZWxmLiRicm9hZGNhc3QoJ3NldEhlaWdodCcsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OnJlcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuZXhlYygpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=