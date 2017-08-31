'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$component) {
    _inherits(_default, _wepy$component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            imgBaseUrl: '../../../static/images/',
            catalog: []
        }, _this.methods = {
            dealLoad: function dealLoad(e) {
                console.log(1);
            },
            dealErr: function dealErr(e) {
                console.log(2, e.detail);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            this.catalog = [{
                name: '再次购买',
                icon: this.imgBaseUrl + 'fund.png'
            }, {
                name: '我的收藏',
                icon: this.imgBaseUrl + 'hm_spr.png'
            }, {
                name: '营销活动',
                icon: this.imgBaseUrl + 'member.png'
            }, {
                name: '平台公告',
                icon: this.imgBaseUrl + 'order.png'
            }];
        }
    }]);

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLWhlYWRlci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaW1nQmFzZVVybCIsImNhdGFsb2ciLCJtZXRob2RzIiwiZGVhbExvYWQiLCJlIiwiY29uc29sZSIsImxvZyIsImRlYWxFcnIiLCJkZXRhaWwiLCJuYW1lIiwiaWNvbiIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhMQW1CSUEsSSxHQUFPO0FBQ0hDLHdCQUFZLHlCQURUO0FBRUhDLHFCQUFTO0FBRk4sUyxRQUtQQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0dDLENBREgsRUFDSztBQUNQQyx3QkFBUUMsR0FBUixDQUFZLENBQVo7QUFDSCxhQUhLO0FBSU5DLG1CQUpNLG1CQUlFSCxDQUpGLEVBSUk7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWSxDQUFaLEVBQWVGLEVBQUVJLE1BQWpCO0FBQ0g7QUFOSyxTOzs7OztpQ0FyQkQ7QUFDTCxpQkFBS1AsT0FBTCxHQUFlLENBQUM7QUFDWlEsc0JBQU0sTUFETTtBQUVaQyxzQkFBTSxLQUFLVixVQUFMLEdBQWtCO0FBRlosYUFBRCxFQUdiO0FBQ0VTLHNCQUFNLE1BRFI7QUFFRUMsc0JBQU0sS0FBS1YsVUFBTCxHQUFrQjtBQUYxQixhQUhhLEVBTWI7QUFDRVMsc0JBQU0sTUFEUjtBQUVFQyxzQkFBTSxLQUFLVixVQUFMLEdBQWtCO0FBRjFCLGFBTmEsRUFTYjtBQUNFUyxzQkFBTSxNQURSO0FBRUVDLHNCQUFNLEtBQUtWLFVBQUwsR0FBa0I7QUFGMUIsYUFUYSxDQUFmO0FBYUg7Ozs7RUFoQndCLGVBQUtXLFMiLCJmaWxlIjoiY28taGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0YWxvZyA9IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+WGjeasoei0reS5sCcsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pbWdCYXNlVXJsICsgJ2Z1bmQucG5nJ1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+aIkeeahOaUtuiXjycsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pbWdCYXNlVXJsICsgJ2htX3Nwci5wbmcnXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn6JCl6ZSA5rS75YqoJyxcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmltZ0Jhc2VVcmwgKyAnbWVtYmVyLnBuZydcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICflubPlj7DlhazlkYonLFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuaW1nQmFzZVVybCArICdvcmRlci5wbmcnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGltZ0Jhc2VVcmw6ICcuLi8uLi8uLi9zdGF0aWMvaW1hZ2VzLycsXG4gICAgICAgICAgICBjYXRhbG9nOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGRlYWxMb2FkKGUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVhbEVycihlKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygyLCBlLmRldGFpbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==