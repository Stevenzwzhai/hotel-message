'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _coTab = require('./../components/car/co-tab.js');

var _coTab2 = _interopRequireDefault(_coTab);

var _coGoodsItem = require('./../components/car/co-goodsItem.js');

var _coGoodsItem2 = _interopRequireDefault(_coGoodsItem);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            enablePullDownRefresh: true
        }, _this.data = {
            tabList: [{
                name: '全部',
                id: 'name1',
                img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
            }, {
                name: '待支付',
                id: 'name2',
                img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
            }, {
                name: '待发货',
                id: 'name3',
                img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            }, {
                name: '待收货',
                id: 'name4',
                img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            }],
            goodsList: [{
                id: 1,
                name: 'PT201708092639528',
                date: '2017-8-3 12:15:11',
                price: 12,
                status: 1,
                typeNum: 3,
                images: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg']
            }]
        }, _this.$props = { "goodsCarItem": { "v-bind:goodsInfo.once": { "for": "goodsList", "item": "item", "index": "index", "key": "item", "value": "item" } }, "tabs": { "xmlns:v-bind": "", "v-bind:tabList.once": "tabList" } }, _this.$events = {}, _this.components = {
            tabs: _coTab2.default,
            goodsCarItem: _coGoodsItem2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            this.canRefresh = true;
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            console.info('onPullDownRefresh');
            _wepy2.default.showLoading({
                title: '加载中'
            });
            setTimeout(function () {
                _wepy2.default.hideLoading();
                _wepy2.default.stopPullDownRefresh();
            }, 2000);
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            console.info('onReachBottom');
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/car'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwidGFiTGlzdCIsIm5hbWUiLCJpZCIsImltZyIsImdvb2RzTGlzdCIsImRhdGUiLCJwcmljZSIsInN0YXR1cyIsInR5cGVOdW0iLCJpbWFnZXMiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYnMiLCJnb29kc0Nhckl0ZW0iLCJjYW5SZWZyZXNoIiwiY29uc29sZSIsImluZm8iLCJzaG93TG9hZGluZyIsInRpdGxlIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBR0lBLE0sR0FBUztBQUNEQyxtQ0FBdUI7QUFEdEIsUyxRQVFUQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQztBQUNOQyxzQkFBTSxJQURBO0FBRU5DLG9CQUFJLE9BRkU7QUFHTkMscUJBQUs7QUFIQyxhQUFELEVBSVA7QUFDRUYsc0JBQU0sS0FEUjtBQUVFQyxvQkFBSSxPQUZOO0FBR0VDLHFCQUFLO0FBSFAsYUFKTyxFQVFQO0FBQ0VGLHNCQUFNLEtBRFI7QUFFRUMsb0JBQUksT0FGTjtBQUdFQyxxQkFBSztBQUhQLGFBUk8sRUFZUDtBQUNFRixzQkFBTSxLQURSO0FBRUVDLG9CQUFJLE9BRk47QUFHRUMscUJBQUs7QUFIUCxhQVpPLENBRE47QUFrQkhDLHVCQUFXLENBQUM7QUFDUkYsb0JBQUksQ0FESTtBQUVSRCxzQkFBTSxtQkFGRTtBQUdSSSxzQkFBTSxtQkFIRTtBQUlSQyx1QkFBTyxFQUpDO0FBS1JDLHdCQUFRLENBTEE7QUFNUkMseUJBQVEsQ0FOQTtBQU9SQyx3QkFBUSxDQUFDLHNFQUFELEVBQXdFLHNFQUF4RSxFQUErSSxzRUFBL0k7QUFQQSxhQUFEO0FBbEJSLFMsUUE2QlJDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMseUJBQXdCLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFFBQU8sTUFBMUIsRUFBaUMsU0FBUSxPQUF6QyxFQUFpRCxPQUFNLE1BQXZELEVBQThELFNBQVEsTUFBdEUsRUFBekIsRUFBaEIsRUFBd0gsUUFBTyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUEvSCxFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsaUNBREU7QUFFRkM7QUFGRSxTOzs7OztpQ0FuQ0c7QUFDTCxpQkFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7NENBc0NtQjtBQUNoQkMsb0JBQVFDLElBQVIsQ0FBYSxtQkFBYjtBQUNBLDJCQUFLQyxXQUFMLENBQWlCO0FBQ2JDLHVCQUFPO0FBRE0sYUFBakI7QUFHQUMsdUJBQVcsWUFBTTtBQUNiLCtCQUFLQyxXQUFMO0FBQ0EsK0JBQUtDLG1CQUFMO0FBQ0gsYUFIRCxFQUdHLElBSEg7QUFJSDs7O3dDQUVlO0FBQ1pOLG9CQUFRQyxJQUFSLENBQWEsZUFBYjtBQUVIOzs7O0VBNUR3QixlQUFLTSxJIiwiZmlsZSI6ImNhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9jYXIvY28tdGFiJ1xuICAgIGltcG9ydCBnb29kc0Nhckl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXIvY28tZ29vZHNJdGVtJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNhblJlZnJlc2ggPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdGFiTGlzdDogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAn5YWo6YOoJyxcbiAgICAgICAgICAgICAgICBpZDogJ25hbWUxJyxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZydcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG5hbWU6ICflvoXmlK/ku5gnLFxuICAgICAgICAgICAgICAgIGlkOiAnbmFtZTInLFxuICAgICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4NjY0MzQyOTYuanBnJ1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgbmFtZTogJ+W+heWPkei0pycsXG4gICAgICAgICAgICAgICAgaWQ6ICduYW1lMycsXG4gICAgICAgICAgICAgICAgaW1nOiAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBuYW1lOiAn5b6F5pS26LSnJyxcbiAgICAgICAgICAgICAgICBpZDogJ25hbWU0JyxcbiAgICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgZ29vZHNMaXN0OiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdQVDIwMTcwODA5MjYzOTUyOCcsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzIwMTctOC0zIDEyOjE1OjExJyxcbiAgICAgICAgICAgICAgICBwcmljZTogMTIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICAgIHR5cGVOdW06MyxcbiAgICAgICAgICAgICAgICBpbWFnZXM6IFsnaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGcnLCdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZycsJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImdvb2RzQ2FySXRlbVwiOntcInYtYmluZDpnb29kc0luZm8ub25jZVwiOntcImZvclwiOlwiZ29vZHNMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaXRlbVwiLFwidmFsdWVcIjpcIml0ZW1cIn19LFwidGFic1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFiTGlzdC5vbmNlXCI6XCJ0YWJMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHRhYnMsXG4gICAgICAgICAgICBnb29kc0Nhckl0ZW1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdvblB1bGxEb3duUmVmcmVzaCcpXG4gICAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgICAgd2VweS5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgICAgICAgIH0sIDIwMDApXG4gICAgICAgIH1cblxuICAgICAgICBvblJlYWNoQm90dG9tKCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdvblJlYWNoQm90dG9tJylcblxuICAgICAgICB9XG4gICAgfVxuIl19