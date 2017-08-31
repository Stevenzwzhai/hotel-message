'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _api = require('./../api/index.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            console.log(this.$parent.wxValidate);
            this.$parent.getUserInfo(function (userInfo) {
                if (userInfo) {
                    self.userInfo = userInfo;
                }
                self.normalTitle = '标题已被修改';

                self.setTimeoutTitle = '标题三秒后会被修改';
                setTimeout(function () {
                    self.setTimeoutTitle = '到三秒了';
                    self.$apply();
                }, 3000);

                self.$apply();
            });
        }
    }]);

    return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.config = {
        navigationBarTitleText: 'test'
    };
    this.$props = { "group": { "v-bind:grouplist.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" }, "v-bind:indexa.once": { "for": "groupList", "item": "item", "index": "index", "key": "key", "value": "index" } }, "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
    this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
    this.components = {
        panel: _panel2.default,
        counter1: _counter2.default,
        counter2: _counter2.default,
        list: _list2.default,
        group: _group2.default,
        toast: _wepyComToast2.default
    };
    this.mixins = [_test2.default];
    this.data = {
        mynum: 20,
        userInfo: {
            nickName: '加载中...'
        },
        normalTitle: '原始标题',
        setTimeoutTitle: '标题三秒后会被修改',
        count: 0,
        netrst: '',
        groupList: [{
            id: 1,
            name: '点击改变',
            list: [{
                childid: '1.1',
                childname: '子项，点我改变'
            }, {
                childid: '1.2',
                childname: '子项，点我改变'
            }, {
                childid: '1.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 2,
            name: '点击改变',
            list: [{
                childid: '2.1',
                childname: '子项，点我改变'
            }, {
                childid: '2.2',
                childname: '子项，点我改变'
            }, {
                childid: '2.3',
                childname: '子项，点我改变'
            }]
        }, {
            id: 3,
            name: '点击改变',
            list: [{
                childid: '3.1',
                childname: '子项，点我改变'
            }]
        }]
    };
    this.computed = {
        now: function now() {
            return +new Date();
        }
    };
    this.methods = {
        plus: function plus() {
            this.mynum++;
        },
        toast: function toast() {
            var promise = this.$invoke('toast', 'show', {
                title: '自定义标题'
                //                    img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
            });

            promise.then(function (d) {
                console.log('toast');
                console.log('hahah');
            });
        },
        tap: function tap() {
            console.log('do noting from ' + this.$name);
            console.log('position');
            _wepy2.default.getLocation().then(function (res) {
                console.log(res);
            }).catch(function (err) {
                console.log(err);
            });
        },
        communicate: function communicate() {
            console.log(this.$name + ' tap');

            this.$invoke('counter2', 'minus', 45, 6);
            this.$invoke('counter1', 'plus', 45, 6);

            this.$broadcast('index-broadcast', 1, 3, 4);
        },
        request: function request() {
            var self = this;
            var i = 10;
            var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
            while (i--) {
                _wepy2.default.request('https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i).then(function (res) {
                    self.netrst += d.data + '.';
                    self.$apply();
                }).catch(function (err) {
                    console.log(err);
                    self.$invoke('toast', 'show', {
                        title: '有错'
                    });
                });
            }
        },
        counterEmit: function counterEmit() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        },
        getPos: function getPos() {
            console.log('position');
            _api2.default.login_getUserInfo();
        }
    };
    this.events = {
        'index-emit': function indexEmit() {
            var _ref3;

            var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
}, _temp2);
exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50Iiwid3hWYWxpZGF0ZSIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGFuZWwiLCJjb3VudGVyMSIsImNvdW50ZXIyIiwibGlzdCIsImdyb3VwIiwidG9hc3QiLCJtaXhpbnMiLCJkYXRhIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsInRoZW4iLCJkIiwidGFwIiwiJG5hbWUiLCJnZXRMb2NhdGlvbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29tbXVuaWNhdGUiLCIkYnJvYWRjYXN0IiwicmVxdWVzdCIsImkiLCJtYXAiLCJjb3VudGVyRW1pdCIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsImdldFBvcyIsImxvZ2luX2dldFVzZXJJbmZvIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FpSlI7QUFDTCxnQkFBSUMsT0FBTyxJQUFYO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsT0FBTCxDQUFhQyxVQUF6QjtBQUNBLGlCQUFLRCxPQUFMLENBQWFFLFdBQWIsQ0FBeUIsVUFBVUMsUUFBVixF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SCxpQkFKTCxFQUtLc0MsS0FMTCxDQUtXLFVBQUNDLEdBQUQsRUFBUztBQUNaaEQsNEJBQVFDLEdBQVIsQ0FBWStDLEdBQVo7QUFDQWpELHlCQUFLd0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDMUJDLCtCQUFPO0FBRG1CLHFCQUE5QjtBQUdILGlCQVZMO0FBV0g7QUFDSixTQWpESztBQWtETmMsbUJBbERNLHlCQWtEZTtBQUFBOztBQUNqQixnQkFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0F4RCxvQkFBUUMsR0FBUixDQUFlLEtBQUsyQyxLQUFwQixpQkFBcUNXLE9BQU96QixJQUE1QyxjQUF5RHlCLE9BQU9FLE1BQVAsQ0FBY2IsS0FBdkU7QUFDSCxTQXJESztBQXNETmMsY0F0RE0sb0JBc0RHO0FBQ0wxRCxvQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSwwQkFBSzBELGlCQUFMO0FBQ0g7QUF6REssSztTQTREVkMsTSxHQUFTO0FBQ0wsc0JBQWMscUJBQWE7QUFBQTs7QUFDdkIsZ0JBQUlMLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBeEQsb0JBQVFDLEdBQVIsQ0FBZSxPQUFLMkMsS0FBcEIsaUJBQXFDVyxPQUFPekIsSUFBNUMsY0FBeUR5QixPQUFPRSxNQUFQLENBQWNiLEtBQXZFO0FBQ0g7QUFKSSxLOztrQkExSVE5QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnXG4gICAgaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwnXG4gICAgaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb3VudGVyJ1xuICAgIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICAgIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uL2FwaSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgICAgIH1cbiAgICAgICAkcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCIsXCJ2YWx1ZVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwiLFwidmFsdWVcIjpcImluZGV4XCJ9fSxcImNvdW50ZXIxXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifX07XHJcbiRldmVudHMgPSB7XCJjb3VudGVyMVwiOntcInYtb246aW5kZXgtZW1pdFwiOlwiY291bnRlckVtaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgICAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICAgICAgICBsaXN0OiBMaXN0LFxuICAgICAgICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgICAgICAgdG9hc3Q6IFRvYXN0XG4gICAgICAgIH1cblxuICAgICAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBteW51bTogMjAsXG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcbiAgICAgICAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIG5ldHJzdDogJycsXG4gICAgICAgICAgICBncm91cExpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMS4yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZGlkOiAnMi4yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbm93KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5teW51bSsrXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9hc3QoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ5qCH6aKYJ1xuLy8gICAgICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYWhhaCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3NpdGlvbicpXG4gICAgICAgICAgICAgICAgd2VweS5nZXRMb2NhdGlvbigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbW11bmljYXRlKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMScsICdwbHVzJywgNDUsIDYpXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoJ2luZGV4LWJyb2FkY2FzdCcsIDEsIDMsIDQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWVzdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDEwXG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IFsnTUE9PScsICdNUW89JywgJ01nPT0nLCAnTXc9PScsICdOQT09JywgJ05RPT0nLCAnTmc9PScsICdOdz09JywgJ09BPT0nLCAnT1E9PSddXG4gICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3QoJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aciemUmSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UG9zKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3NpdGlvbicpXG4gICAgICAgICAgICAgICAgYWpheC5sb2dpbl9nZXRVc2VySW5mbygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50Lnd4VmFsaWRhdGUpXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5Yiw5LiJ56eS5LqGJ1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcblxuICAgICAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=