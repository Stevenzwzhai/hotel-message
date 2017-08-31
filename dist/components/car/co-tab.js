'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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
            imgUrls: [],
            currentItem: 0
        }, _this.props = {
            tabList: Array
        }, _this.methods = {
            itemChange: function itemChange(e) {
                this.currentItem = e.detail.current;
            },
            changeTab: function changeTab(e) {
                if (e.target.dataset.id == this.currentItem) {
                    return;
                }
                this.currentItem = e.target.dataset.id;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLXRhYi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaW1nVXJscyIsImN1cnJlbnRJdGVtIiwicHJvcHMiLCJ0YWJMaXN0IiwiQXJyYXkiLCJtZXRob2RzIiwiaXRlbUNoYW5nZSIsImUiLCJkZXRhaWwiLCJjdXJyZW50IiwiY2hhbmdlVGFiIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhMQUVJQSxJLEdBQU87QUFDSEMscUJBQVMsRUFETjtBQUlIQyx5QkFBYTtBQUpWLFMsUUFPUEMsSyxHQUFRO0FBQ0pDLHFCQUFTQztBQURMLFMsUUFJUkMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ1E7QUFDVixxQkFBS04sV0FBTCxHQUFtQk0sRUFBRUMsTUFBRixDQUFTQyxPQUE1QjtBQUNILGFBSEs7QUFJTkMscUJBSk0scUJBSUlILENBSkosRUFJTztBQUNULG9CQUFHQSxFQUFFSSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEVBQWpCLElBQXVCLEtBQUtaLFdBQS9CLEVBQTJDO0FBQ3ZDO0FBQ0g7QUFDRCxxQkFBS0EsV0FBTCxHQUFtQk0sRUFBRUksTUFBRixDQUFTQyxPQUFULENBQWlCQyxFQUFwQztBQUNIO0FBVEssUzs7OztFQVplLGVBQUtDLFMiLCJmaWxlIjoiY28tdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGltZ1VybHM6IFtcblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtOiAwXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIHRhYkxpc3Q6IEFycmF5XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaXRlbUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGUuZGV0YWlsLmN1cnJlbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VUYWIoZSkge1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQuaWQgPT0gdGhpcy5jdXJyZW50SXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19