'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wxValidate2 = require('./utils/wxValidate.js');

var _wxValidate3 = _interopRequireDefault(_wxValidate2);

var _utils = require('./utils/index.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.assign(_wepy2.default, _utils2.default);

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: [
            //                'pages/login',
            //                'pages/index',
            'pages/home', 'pages/car', 'pages/goods', 'pages/me'],
            window: {
                backgroundTextStyle: 'dark',
                navigationBarBackgroundColor: '#3CBAFF',
                navigationBarTitleText: '云订货',
                navigationBarTextStyle: 'white',
                enablePullDownRefresh: false,
                onReachBottomDistance: 50
            },
            tabBar: {
                color: '#A4AAB3',
                selectedColor: '#3CBAFF',
                backgroundColor: '#fffefe',
                borderStyle: '#E7EEF3',
                list: [{
                    pagePath: 'pages/home',
                    text: '首页',
                    iconPath: './static/images/ic_home_gray.png',
                    selectedIconPath: './static/images/ic_home_blue.png'
                }, {
                    pagePath: 'pages/goods',
                    text: '商品',
                    iconPath: './static/images/ic_goods_gray.png',
                    selectedIconPath: './static/images/ic_goods_blue.png'
                }, {
                    pagePath: 'pages/car',
                    text: '订货车',
                    iconPath: './static/images/ic_shopping_gray.png',
                    selectedIconPath: './static/images/ic_shopping_blue.png'
                }, {
                    pagePath: 'pages/me',
                    text: '我的',
                    iconPath: './static/images/ic_mine_gray.png',
                    selectedIconPath: './static/images/ic_mine_blue.png'
                }]
            }
        };
        _this.globalData = {
            userInfo: null
        };

        _this.use('requestfix');
        _this.intercept('request', {
            config: function config(p) {
                console.log(p);
                return p;
            },
            success: function success(p) {
                console.log('request success');
                return p;
            },
            fail: function fail(p) {
                console.log('request error');
                return p;
            }
        });
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            this.testAsync();
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'wxValidate',
        value: function wxValidate(rules, messages) {
            return new _wxValidate3.default(rules, messages);
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJmYWlsIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsInJ1bGVzIiwibWVzc2FnZXMiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBQSxPQUFPQyxNQUFQOzs7OztBQW9ESSx3QkFBYztBQUFBOztBQUFBOztBQUFBLGNBbERkQyxNQWtEYyxHQWxETDtBQUNMQyxtQkFBTztBQUNuQjtBQUNBO0FBQ2dCLHdCQUhHLEVBSUgsV0FKRyxFQUtILGFBTEcsRUFNSCxVQU5HLENBREY7QUFTTEMsb0JBQVE7QUFDSkMscUNBQXFCLE1BRGpCO0FBRUpDLDhDQUE4QixTQUYxQjtBQUdKQyx3Q0FBd0IsS0FIcEI7QUFJSkMsd0NBQXdCLE9BSnBCO0FBS0pDLHVDQUFzQixLQUxsQjtBQU1KQyx1Q0FBc0I7QUFObEIsYUFUSDtBQWlCTEMsb0JBQVE7QUFDSkMsdUJBQU8sU0FESDtBQUVKQywrQkFBZSxTQUZYO0FBR0pDLGlDQUFpQixTQUhiO0FBSUpDLDZCQUFhLFNBSlQ7QUFLSkMsc0JBQU0sQ0FBQztBQUNIQyw4QkFBVSxZQURQO0FBRUhDLDBCQUFNLElBRkg7QUFHSEMsOEJBQVUsa0NBSFA7QUFJSEMsc0NBQWlCO0FBSmQsaUJBQUQsRUFLSjtBQUNFSCw4QkFBVSxhQURaO0FBRUVDLDBCQUFNLElBRlI7QUFHRUMsOEJBQVUsbUNBSFo7QUFJRUMsc0NBQWlCO0FBSm5CLGlCQUxJLEVBVUo7QUFDRUgsOEJBQVUsV0FEWjtBQUVFQywwQkFBTSxLQUZSO0FBR0VDLDhCQUFVLHNDQUhaO0FBSUVDLHNDQUFpQjtBQUpuQixpQkFWSSxFQWVKO0FBQ0VILDhCQUFVLFVBRFo7QUFFRUMsMEJBQU0sSUFGUjtBQUdFQyw4QkFBVSxrQ0FIWjtBQUlFQyxzQ0FBaUI7QUFKbkIsaUJBZkk7QUFMRjtBQWpCSCxTQWtESztBQUFBLGNBSmRDLFVBSWMsR0FKRDtBQUNUQyxzQkFBVTtBQURELFNBSUM7O0FBRVYsY0FBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxjQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN0QnRCLGtCQURzQixrQkFDZHVCLENBRGMsRUFDWDtBQUNQQyx3QkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsdUJBQU9BLENBQVA7QUFDSCxhQUpxQjtBQUt0QkcsbUJBTHNCLG1CQUtiSCxDQUxhLEVBS1Y7QUFDUkMsd0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLHVCQUFPRixDQUFQO0FBQ0gsYUFScUI7QUFTdEJJLGdCQVRzQixnQkFTaEJKLENBVGdCLEVBU2I7QUFDTEMsd0JBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsdUJBQU9GLENBQVA7QUFDSDtBQVpxQixTQUExQjtBQUhVO0FBaUJiOzs7O21DQUVVO0FBQ1AsaUJBQUtLLFNBQUw7QUFDSDs7OzhCQUVLQyxDLEVBQUc7QUFDTCxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQywyQkFBVyxZQUFNO0FBQ2JGLDRCQUFRLGtCQUFSO0FBQ0gsaUJBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0gsYUFKTSxDQUFQO0FBS0g7Ozs7Ozs7Ozs7O3VDQUdzQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0M7O0FBQ05YLHdDQUFRQyxHQUFSLENBQVlVLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FHUUMsSyxFQUFPQyxRLEVBQVM7QUFDeEIsbUJBQU8seUJBQWVELEtBQWYsRUFBc0JDLFFBQXRCLENBQVA7QUFDSDs7O29DQUVXQyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS3BCLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0g7QUFDRCwyQkFBS29CLFdBQUwsQ0FBaUI7QUFDYmQsdUJBRGEsbUJBQ0xlLEdBREssRUFDQTtBQUNURix5QkFBS3BCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCcUIsSUFBSXJCLFFBQS9CO0FBQ0FrQiwwQkFBTUEsR0FBR0csSUFBSXJCLFFBQVAsQ0FBTjtBQUNIO0FBSlksYUFBakI7QUFNSDs7OztFQXRHd0IsZUFBS3NCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gICAgaW1wb3J0IHd4VmFsaWRhdGUgZnJvbSAnLi91dGlscy93eFZhbGlkYXRlJ1xuICAgIGltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuICAgIE9iamVjdC5hc3NpZ24od2VweSwgdXRpbHMpXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2VzOiBbXG4vLyAgICAgICAgICAgICAgICAncGFnZXMvbG9naW4nLFxuLy8gICAgICAgICAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAncGFnZXMvaG9tZScsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2NhcicsXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2dvb2RzJyxcbiAgICAgICAgICAgICAgICAncGFnZXMvbWUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2luZG93OiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjM0NCQUZGJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LqR6K6i6LSnJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDpmYWxzZSxcbiAgICAgICAgICAgICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6NTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJCYXI6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNBNEFBQjMnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjM0NCQUZGJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZWZlJyxcbiAgICAgICAgICAgICAgICBib3JkZXJTdHlsZTogJyNFN0VFRjMnLFxuICAgICAgICAgICAgICAgIGxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgICAgICAgICAgICBpY29uUGF0aDogJy4vc3RhdGljL2ltYWdlcy9pY19ob21lX2dyYXkucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDonLi9zdGF0aWMvaW1hZ2VzL2ljX2hvbWVfYmx1ZS5wbmcnXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvZ29vZHMnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5ZWG5ZOBJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcuL3N0YXRpYy9pbWFnZXMvaWNfZ29vZHNfZ3JheS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOicuL3N0YXRpYy9pbWFnZXMvaWNfZ29vZHNfYmx1ZS5wbmcnXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvY2FyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+iuoui0p+i9picsXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnLi9zdGF0aWMvaW1hZ2VzL2ljX3Nob3BwaW5nX2dyYXkucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDonLi9zdGF0aWMvaW1hZ2VzL2ljX3Nob3BwaW5nX2JsdWUucG5nJ1xuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21lJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgICAgICAgICAgIGljb25QYXRoOiAnLi9zdGF0aWMvaW1hZ2VzL2ljX21pbmVfZ3JheS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOicuL3N0YXRpYy9pbWFnZXMvaWNfbWluZV9ibHVlLnBuZydcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgIGNvbmZpZyAocCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBvbkxhdW5jaCgpIHtcbiAgICAgICAgICAgIHRoaXMudGVzdEFzeW5jKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNsZWVwKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgICAgICAgICAgIH0sIHMgKiAxMDAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIHRlc3RBc3luYygpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgd3hWYWxpZGF0ZSAocnVsZXMsIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIHJldHVybiBuZXcgd3hWYWxpZGF0ZShydWxlcywgbWVzc2FnZXMpXG4gICAgICAgIH1cblxuICAgICAgICBnZXRVc2VySW5mbyhjYikge1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=