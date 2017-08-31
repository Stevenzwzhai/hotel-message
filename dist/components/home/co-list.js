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
            toView: 'green',
            scrollTop: 50,
            goodsList: [{
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }, {
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }, {
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }, {
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }, {
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }, {
                price: 12,
                discount: 11,
                nums: 0,
                name: '得力钱包'
            }],
            pulldownEnd: false,
            currentScTop: 50,
            pulldownTimer: '',
            upper: true,
            scrollHeight: 0,
            isPull: false,
            goodsNums: null,
            showBottom: false
        }, _this.props = {
            itemHeight: Number
        }, _this.computed = {
            allNums: function allNums() {
                var allNums = 0;
                this.goodsList.forEach(function (item) {
                    allNums += Number(item.nums);
                });
                console.log('b:' + allNums);
                this.goodsNums = allNums;
                console.log('c:' + this.goodsNums);
                return allNums;
            },
            allMoney: function allMoney() {
                var allMoney = 0;
                this.goodsList.forEach(function (item) {
                    allMoney += Number(item.discount * item.nums);
                });
                return _wepy2.default.formatMoney(allMoney);
            }
        }, _this.watch = {
            goodsNums: function goodsNums(val) {
                console.log('a:' + val);
                this.showBottom = val > 0;
            }
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
            },
            addCar: function addCar(item, index) {
                this.goodsList[+index].isAdd = false;
            },
            cancleNum: function cancleNum(item, index) {
                if (this.goodsList[+index].nums == 0) {
                    return;
                }
                this.goodsList[+index].nums--;
            },
            addNum: function addNum(item, index) {
                this.goodsList[+index].nums++;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    //只能监听data中数据


    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            wx.createSelectorQuery().select('.scroll-list').fields({
                size: true
            }, function (res) {

                self.scrollHeight = res.height;
            }).exec();

            this.goodsList = this.goodsList.map(function (item) {
                item.isAdd = true;
                return item;
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLWxpc3QuanMiXSwibmFtZXMiOlsiZGF0YSIsInRvVmlldyIsInNjcm9sbFRvcCIsImdvb2RzTGlzdCIsInByaWNlIiwiZGlzY291bnQiLCJudW1zIiwibmFtZSIsInB1bGxkb3duRW5kIiwiY3VycmVudFNjVG9wIiwicHVsbGRvd25UaW1lciIsInVwcGVyIiwic2Nyb2xsSGVpZ2h0IiwiaXNQdWxsIiwiZ29vZHNOdW1zIiwic2hvd0JvdHRvbSIsInByb3BzIiwiaXRlbUhlaWdodCIsIk51bWJlciIsImNvbXB1dGVkIiwiYWxsTnVtcyIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImFsbE1vbmV5IiwiZm9ybWF0TW9uZXkiLCJ3YXRjaCIsInZhbCIsImV2ZW50cyIsInNldEhlaWdodCIsIm9iaiIsImhlaWdodCIsIm1ldGhvZHMiLCJwdWxsZG93biIsImUiLCJzZXRDdXJyZW50U2Nyb2xsVG9wIiwicmVzZXRTY3JvbGxUb3AiLCJwdWxsdXAiLCJzZXRUaW1lb3V0Iiwic2V0Q3VycmVudFNjcm9sbEJvdHRvbSIsInJlc2V0U2Nyb2xsQm90dG9tIiwic2Nyb2xsIiwiZW5kVG91Y2giLCJhZGRDYXIiLCJpbmRleCIsImlzQWRkIiwiY2FuY2xlTnVtIiwiYWRkTnVtIiwic2VsZiIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImZpZWxkcyIsInNpemUiLCJyZXMiLCJleGVjIiwibWFwIiwiJGFwcGx5IiwibGVuZ3RoIiwic2Nyb2xsT2Zmc2V0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBR0lBLEksR0FBTztBQUNIQyxvQkFBUSxPQURMO0FBRUhDLHVCQUFXLEVBRlI7QUFHSEMsdUJBQVcsQ0FBQztBQUNSQyx1QkFBTSxFQURFO0FBRVJDLDBCQUFTLEVBRkQ7QUFHUkMsc0JBQUssQ0FIRztBQUlSQyxzQkFBSztBQUpHLGFBQUQsRUFLVDtBQUNF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LGFBQXZELEVBRUcsVUFBVUwsR0FBVixFQUFlO0FBQ2RoQyx3QkFBUUMsR0FBUixDQUFZK0IsSUFBSXJELFNBQWhCO0FBQ0ErQyxxQkFBS3hDLFlBQUwsR0FBb0I4QyxJQUFJckQsU0FBeEI7QUFDSCxhQUxELEVBS0dzRCxJQUxIO0FBTUg7Ozs7RUE5TXdCLGVBQUtLLFMiLCJmaWxlIjoiY28tbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHRvVmlldzogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogNTAsXG4gICAgICAgICAgICBnb29kc0xpc3Q6IFt7XG4gICAgICAgICAgICAgICAgcHJpY2U6MTIsXG4gICAgICAgICAgICAgICAgZGlzY291bnQ6MTEsXG4gICAgICAgICAgICAgICAgbnVtczowLFxuICAgICAgICAgICAgICAgIG5hbWU6J+W+l+WKm+mSseWMhSdcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHByaWNlOjEyLFxuICAgICAgICAgICAgICAgIGRpc2NvdW50OjExLFxuICAgICAgICAgICAgICAgIG51bXM6MCxcbiAgICAgICAgICAgICAgICBuYW1lOiflvpflipvpkrHljIUnXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBwcmljZToxMixcbiAgICAgICAgICAgICAgICBkaXNjb3VudDoxMSxcbiAgICAgICAgICAgICAgICBudW1zOjAsXG4gICAgICAgICAgICAgICAgbmFtZTon5b6X5Yqb6ZKx5YyFJ1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgcHJpY2U6MTIsXG4gICAgICAgICAgICAgICAgZGlzY291bnQ6MTEsXG4gICAgICAgICAgICAgICAgbnVtczowLFxuICAgICAgICAgICAgICAgIG5hbWU6J+W+l+WKm+mSseWMhSdcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIHByaWNlOjEyLFxuICAgICAgICAgICAgICAgIGRpc2NvdW50OjExLFxuICAgICAgICAgICAgICAgIG51bXM6MCxcbiAgICAgICAgICAgICAgICBuYW1lOiflvpflipvpkrHljIUnXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBwcmljZToxMixcbiAgICAgICAgICAgICAgICBkaXNjb3VudDoxMSxcbiAgICAgICAgICAgICAgICBudW1zOjAsXG4gICAgICAgICAgICAgICAgbmFtZTon5b6X5Yqb6ZKx5YyFJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBwdWxsZG93bkVuZDogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50U2NUb3A6IDUwLFxuICAgICAgICAgICAgcHVsbGRvd25UaW1lcjogJycsXG4gICAgICAgICAgICB1cHBlcjp0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxuICAgICAgICAgICAgaXNQdWxsOmZhbHNlLFxuICAgICAgICAgICAgZ29vZHNOdW1zOm51bGwsXG4gICAgICAgICAgICBzaG93Qm90dG9tOmZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQ6IE51bWJlclxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICBhbGxOdW1zKCkge1xuICAgICAgICAgICAgICAgIGxldCBhbGxOdW1zID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdvb2RzTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGxOdW1zKz1OdW1iZXIoaXRlbS5udW1zKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2I6JythbGxOdW1zKVxuICAgICAgICAgICAgICAgIHRoaXMuZ29vZHNOdW1zID0gYWxsTnVtc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjOicrdGhpcy5nb29kc051bXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbE51bXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGxNb25leSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWxsTW9uZXkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5nb29kc0xpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsTW9uZXkrPU51bWJlcihpdGVtLmRpc2NvdW50Kml0ZW0ubnVtcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB3ZXB5LmZvcm1hdE1vbmV5KGFsbE1vbmV5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Y+q6IO955uR5ZCsZGF0YeS4reaVsOaNrlxuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIGdvb2RzTnVtcyh2YWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYTonK3ZhbClcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCb3R0b20gPSB2YWw+MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0ge1xuICAgICAgICAgICAgc2V0SGVpZ2h0OiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtSGVpZ2h0ID0gb2JqLmhlaWdodFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbUhlaWdodClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpe1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnLnNjcm9sbC1saXN0JykuZmllbGRzKHtcbiAgICAgICAgICAgICAgICBzaXplOiB0cnVlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgICAgICAgICBzZWxmLnNjcm9sbEhlaWdodCA9IHJlcy5oZWlnaHRcbiAgICAgICAgICAgIH0pLmV4ZWMoKVxuXG4gICAgICAgICAgICB0aGlzLmdvb2RzTGlzdCA9IHRoaXMuZ29vZHNMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uaXNBZGQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgcHVsbGRvd246IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQdWxsID0gdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bGx1cDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwcGVyID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHVsbCA9IHRydWVcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2Nyb2xsQm90dG9tKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFNjcm9sbEJvdHRvbSgpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbDogZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kVG91Y2ggKCkge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmlzUHVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudXBwZXIgPyB0aGlzLnJlc2V0U2Nyb2xsVG9wKCkgOiB0aGlzLnJlc2V0U2Nyb2xsQm90dG9tKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRDYXIoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvb2RzTGlzdFsraW5kZXhdLmlzQWRkID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jbGVOdW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdvb2RzTGlzdFsraW5kZXhdLm51bXMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nb29kc0xpc3RbK2luZGV4XS5udW1zLS1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGROdW0oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvb2RzTGlzdFsraW5kZXhdLm51bXMrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzZXRTY3JvbGxUb3AgKCkge1xuICAgICAgICAgICAgaWYodGhpcy5wdWxsZG93bkVuZCAmJiAodGhpcy5jdXJyZW50U2NUb3AgPD0gMTUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50U2Nyb2xsVG9wKClcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuY3VycmVudFNjVG9wXG4gICAgICAgICAgICAgICAgdGhpcy5wdWxsZG93bkVuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoIHN1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDUwXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NUb3AgPSA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdWxsZG93bkVuZCkge1xuICAgICAgICAgICAgICAgIC8v5aaC5p6c5rKh5ruh6Laz5p2h5Lu25bCx5p2+5byA6YKj5LmI5rua5Zue5Y6f5aSEXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBOdW1iZXIodGhpcy5jdXJyZW50U2NUb3ApXG4gICAgICAgICAgICAgICAgdGhpcy5wdWxsZG93bkVuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gNTBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNldFNjcm9sbEJvdHRvbSAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1IZWlnaHQqdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gdGhpcy5zY3JvbGxIZWlnaHQgLSB0aGlzLmN1cnJlbnRTY1RvcCArIDEwMClcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxkb3duRW5kICYmIHRoaXMuaXRlbUhlaWdodCp0aGlzLmdvb2RzTGlzdC5sZW5ndGggKyAxMDAgLSB0aGlzLnNjcm9sbEhlaWdodCAtIHRoaXMuY3VycmVudFNjVG9wICA8PSAxNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFNjcm9sbEJvdHRvbSgpXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLmN1cnJlbnRTY1RvcFxuICAgICAgICAgICAgICAgIHRoaXMucHVsbGRvd25FbmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaCBzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLml0ZW1IZWlnaHQqdGhpcy5nb29kc0xpc3QubGVuZ3RoIC0gdGhpcy5zY3JvbGxIZWlnaHQrNTBcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY1RvcCA9IHRoaXMuaXRlbUhlaWdodCp0aGlzLmdvb2RzTGlzdC5sZW5ndGggLSB0aGlzLnNjcm9sbEhlaWdodCs1MFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSwgMjAwMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdWxsZG93bkVuZCkge1xuICAgICAgICAgICAgICAgIC8v5aaC5p6c5rKh5ruh6Laz5p2h5Lu25bCx5p2+5byA6YKj5LmI5rua5Zue5Y6f5aSEXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NkZicsIHRoaXMuY3VycmVudFNjVG9wKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gTnVtYmVyKHRoaXMuY3VycmVudFNjVG9wKVxuICAgICAgICAgICAgICAgIHRoaXMucHVsbGRvd25FbmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuaXRlbUhlaWdodCp0aGlzLmdvb2RzTGlzdC5sZW5ndGggLSB0aGlzLnNjcm9sbEhlaWdodCs1MFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNldEN1cnJlbnRTY3JvbGxCb3R0b20gKCkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcuc2Nyb2xsLWxpc3QnKS5maWVsZHMoe1xuICAgICAgICAgICAgICAgIHNjcm9sbE9mZnNldDogdHJ1ZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFNjVG9wID0gcmVzLnNjcm9sbFRvcFxuICAgICAgICAgICAgfSkuZXhlYygpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50U2Nyb2xsVG9wICgpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnLnNjcm9sbC1saXN0JykuZmllbGRzKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHRydWVcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuc2Nyb2xsVG9wKVxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFNjVG9wID0gcmVzLnNjcm9sbFRvcFxuICAgICAgICAgICAgfSkuZXhlYygpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=