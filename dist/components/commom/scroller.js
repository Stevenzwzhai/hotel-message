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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
            toView: 'green',
            scrollTop: 50,
            goodsList: ['1', 'yellow', 'blue', 'green', 'red', 'red', '3', '4', '5', 'heid'],
            pulldownEnd: false,
            currentScTop: 50,
            pulldownTimer: '',
            upper: true,
            scrollHeight: 0,
            isPull: false
        }, _this.props = {
            itemHeight: Number
        }, _this.events = {
            setHeight: function setHeight(obj) {
                _this.itemHeight = obj.height;
                console.log(_this.itemHeight);
            }
        }, _this.methods = {
            pulldown: function pulldown(e) {
                this.setCurrentScrollTop();
                this.resetScrollTop();
                this.upper = true;
                this.isPull = true;
            },
            pullup: function pullup(e) {
                var _this2 = this;

                this.upper = false;
                this.isPull = true;
                setTimeout(function () {
                    _this2.setCurrentScrollBottom();
                    _this2.resetScrollBottom();
                }, 100);
            },
            scroll: function scroll(e) {
                //                console.log(e)
            },
            endTouch: function endTouch() {
                if (!this.isPull) {
                    return;
                }
                this.pulldownEnd = true;
                this.upper ? this.resetScrollTop() : this.resetScrollBottom();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            wx.createSelectorQuery().select('.scroll-list').fields({
                size: true
            }, function (res) {

                self.scrollHeight = res.height;
            }).exec();
        }
    }, {
        key: 'resetScrollTop',
        value: function resetScrollTop() {
            var _this3 = this;

            if (this.pulldownEnd && this.currentScTop <= 15) {
                this.setCurrentScrollTop();
                this.scrollTop = this.currentScTop;
                this.pulldownEnd = false;
                setTimeout(function () {
                    console.log('refresh success');
                    _this3.scrollTop = 50;
                    setTimeout(function () {
                        _this3.currentScTop = 50;
                        _this3.$apply();
                    });
                    _this3.$apply();
                }, 2000);
            } else if (this.pulldownEnd) {
                //如果没满足条件就松开那么滚回原处
                this.scrollTop = Number(this.currentScTop);
                this.pulldownEnd = false;
                setTimeout(function () {
                    _this3.scrollTop = 50;
                    _this3.$apply();
                });
            }
        }
    }, {
        key: 'resetScrollBottom',
        value: function resetScrollBottom() {
            var _this4 = this;

            console.log(this.itemHeight * this.goodsList.length - this.scrollHeight - this.currentScTop + 100);
            if (this.pulldownEnd && this.itemHeight * this.goodsList.length + 100 - this.scrollHeight - this.currentScTop <= 15) {
                this.setCurrentScrollBottom();
                this.scrollTop = this.currentScTop;
                this.pulldownEnd = false;
                setTimeout(function () {
                    console.log('refresh success');
                    _this4.scrollTop = _this4.itemHeight * _this4.goodsList.length - _this4.scrollHeight + 50;
                    setTimeout(function () {
                        _this4.currentScTop = _this4.itemHeight * _this4.goodsList.length - _this4.scrollHeight + 50;
                        _this4.$apply();
                    });
                    _this4.$apply();
                }, 2000);
            } else if (this.pulldownEnd) {
                //如果没满足条件就松开那么滚回原处
                console.log('sdf', this.currentScTop);
                this.scrollTop = Number(this.currentScTop);
                this.pulldownEnd = false;
                setTimeout(function () {
                    _this4.scrollTop = _this4.itemHeight * _this4.goodsList.length - _this4.scrollHeight + 50;
                    _this4.$apply();
                });
            }
        }
    }, {
        key: 'setCurrentScrollBottom',
        value: function setCurrentScrollBottom() {
            var self = this;
            wx.createSelectorQuery().select('.scroll-list').fields({
                scrollOffset: true
            }, function (res) {
                self.currentScTop = res.scrollTop;
            }).exec();
        }
    }, {
        key: 'setCurrentScrollTop',
        value: function setCurrentScrollTop() {
            var self = this;
            wx.createSelectorQuery().select('.scroll-list').fields({
                scrollOffset: true
            }, function (res) {
                console.log(res.scrollTop);
                self.currentScTop = res.scrollTop;
            }).exec();
        }
    }]);

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbGVyLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImRhdGEiLCJ0b1ZpZXciLCJzY3JvbGxUb3AiLCJnb29kc0xpc3QiLCJwdWxsZG93bkVuZCIsImN1cnJlbnRTY1RvcCIsInB1bGxkb3duVGltZXIiLCJ1cHBlciIsInNjcm9sbEhlaWdodCIsImlzUHVsbCIsInByb3BzIiwiaXRlbUhlaWdodCIsIk51bWJlciIsImV2ZW50cyIsInNldEhlaWdodCIsIm9iaiIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwicHVsbGRvd24iLCJlIiwic2V0Q3VycmVudFNjcm9sbFRvcCIsInJlc2V0U2Nyb2xsVG9wIiwicHVsbHVwIiwic2V0VGltZW91dCIsInNldEN1cnJlbnRTY3JvbGxCb3R0b20iLCJyZXNldFNjcm9sbEJvdHRvbSIsInNjcm9sbCIsImVuZFRvdWNoIiwic2VsZiIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImZpZWxkcyIsInNpemUiLCJyZXMiLCJleGVjIiwiJGFwcGx5IiwibGVuZ3RoIiwic2Nyb2xsT2Zmc2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBSUlBLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNIQyxvQkFBUSxPQURMO0FBRUhDLHVCQUFXLEVBRlI7QUFHSEMsdUJBQVcsQ0FBQyxHQUFELEVBQU0sUUFBTixFQUFnQixNQUFoQixFQUF3QixPQUF4QixFQUFpQyxLQUFqQyxFQUF3QyxLQUF4QyxFQUErQyxHQUEvQyxFQUFvRCxHQUFwRCxFQUF5RCxHQUF6RCxFQUE4RCxNQUE5RCxDQUhSO0FBSUhDLHlCQUFhLEtBSlY7QUFLSEMsMEJBQWMsRUFMWDtBQU1IQywyQkFBZSxFQU5aO0FBT0hDLG1CQUFNLElBUEg7QUFRSEMsMEJBQWMsQ0FSWDtBQVNIQyxvQkFBTztBQVRKLFMsUUFZUEMsSyxHQUFRO0FBQ0pDLHdCQUFZ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QWdDLGNBQWhDLEVBQWdEQyxNQUFoRCxDQUF1RDtBQUNuRE0sOEJBQWM7QUFEcUMsYUFBdkQsRUFFRyxVQUFVSixHQUFWLEVBQWU7QUFDZG5CLHdCQUFRQyxHQUFSLENBQVlrQixJQUFJbEMsU0FBaEI7QUFDQTRCLHFCQUFLekIsWUFBTCxHQUFvQitCLElBQUlsQyxTQUF4QjtBQUNILGFBTEQsRUFLR21DLElBTEg7QUFNSDs7OztFQXJJd0IsZUFBS0ksUyIsImZpbGUiOiJzY3JvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBjb25maWcgPSB7fVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0b1ZpZXc6ICdncmVlbicsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDUwLFxuICAgICAgICAgICAgZ29vZHNMaXN0OiBbJzEnLCAneWVsbG93JywgJ2JsdWUnLCAnZ3JlZW4nLCAncmVkJywgJ3JlZCcsICczJywgJzQnLCAnNScsICdoZWlkJ10sXG4gICAgICAgICAgICBwdWxsZG93bkVuZDogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50U2NUb3A6IDUwLFxuICAgICAgICAgICAgcHVsbGRvd25UaW1lcjogJycsXG4gICAgICAgICAgICB1cHBlcjp0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICAgICAgaXNQdWxsOmZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IE51bWJlclxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgc2V0SGVpZ2h0OiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtSGVpZ2h0ID0gb2JqLmhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1IZWlnaHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKXtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJy5zY3JvbGwtbGlzdCcpLmZpZWxkcyh7XG4gICAgICAgICAgICAgICAgc2l6ZTogdHJ1ZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxIZWlnaHQgPSByZXMuaGVpZ2h0XG4gICAgICAgICAgICB9KS5leGVjKClcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwdWxsZG93bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTY3JvbGxUb3AoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGxUb3AoKVxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5pc1B1bGwgPSB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVsbHVwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBwZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQdWxsID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTY3JvbGxCb3R0b20oKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsQm90dG9tKClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsOiBmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRUb3VjaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNQdWxsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHVsbGRvd25FbmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy51cHBlciA/IHRoaXMucmVzZXRTY3JvbGxUb3AoKSA6IHRoaXMucmVzZXRTY3JvbGxCb3R0b20oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXRTY3JvbGxUb3AgKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGRvd25FbmQgJiYgdGhpcy5jdXJyZW50U2NUb3AgPD0gMTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTY3JvbGxUb3AoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5jdXJyZW50U2NUb3BcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gNTBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY1RvcCA9IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnB1bGxkb3duRW5kKSB7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmsqHmu6HotrPmnaHku7blsLHmnb7lvIDpgqPkuYjmu5rlm57ljp/lpIRcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IE51bWJlcih0aGlzLmN1cnJlbnRTY1RvcClcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSA1MFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0U2Nyb2xsQm90dG9tICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbUhlaWdodCp0aGlzLmdvb2RzTGlzdC5sZW5ndGggLSB0aGlzLnNjcm9sbEhlaWdodCAtIHRoaXMuY3VycmVudFNjVG9wICsxMDApXG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsZG93bkVuZCAmJiB0aGlzLml0ZW1IZWlnaHQqdGhpcy5nb29kc0xpc3QubGVuZ3RoICsgMTAwIC0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmN1cnJlbnRTY1RvcCAgPD0gMTUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRTY3JvbGxCb3R0b20oKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5jdXJyZW50U2NUb3BcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2ggc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5pdGVtSGVpZ2h0KnRoaXMuZ29vZHNMaXN0Lmxlbmd0aCAtIHRoaXMuc2Nyb2xsSGVpZ2h0KzUwXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NUb3AgPSB0aGlzLml0ZW1IZWlnaHQqdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gdGhpcy5zY3JvbGxIZWlnaHQrNTBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHVsbGRvd25FbmQpIHtcbiAgICAgICAgICAgICAgICAvL+WmguaenOayoea7oei2s+adoeS7tuWwseadvuW8gOmCo+S5iOa7muWbnuWOn+WkhFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZGYnLCB0aGlzLmN1cnJlbnRTY1RvcClcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IE51bWJlcih0aGlzLmN1cnJlbnRTY1RvcClcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLml0ZW1IZWlnaHQqdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gdGhpcy5zY3JvbGxIZWlnaHQrNTBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50U2Nyb2xsQm90dG9tICgpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnLnNjcm9sbC1saXN0JykuZmllbGRzKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHRydWVcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRTY1RvcCA9IHJlcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pLmV4ZWMoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q3VycmVudFNjcm9sbFRvcCAoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJy5zY3JvbGwtbGlzdCcpLmZpZWxkcyh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0OiB0cnVlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnNjcm9sbFRvcClcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRTY1RvcCA9IHJlcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIH0pLmV4ZWMoKVxuICAgICAgICB9XG4gICAgfVxuIl19