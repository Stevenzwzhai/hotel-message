'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _api = require('./../api/index.js');

var _api2 = _interopRequireDefault(_api);

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
            backgroundColor: '#F9F9F9'
        }, _this.data = {
            loading: false
        }, _this.computed = {
            valid: function valid() {
                return false;
            }
        }, _this.methods = {
            submit: function submit(e) {
                //                if (!this.WxValidate.checkForm(e)) {
                //                    const error = this.WxValidate.errorList[0]
                //                    this.$invoke('toast', 'show', {
                //                        title: error.msg
                //                    })
                //                    return
                //                }
                //                this.valid = false
                //                this.loading = true
                //                ajax.login_getUserInfo()
                //                setTimeout(() => {
                //                    this.loading = false
                //                    this.$apply()
                //                    this.$invoke('toast', 'show', {
                //                        title: '登录成功',
                //                        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
                //                    })
                //                }, 1500)
                _wepy2.default.switchTab({
                    url: './home'
                });
            }
        }, _this.components = {
            toast: _wepyComToast2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.$parent.wxValidate);
            this.WxValidate = this.$parent.wxValidate({
                tel: {
                    required: true,
                    tel: true
                },
                password: {
                    required: true,
                    minlength: 6
                }
            }, {
                tel: {
                    required: '请输入手机号',
                    tel: '请输入正确的手机号'
                },
                password: {
                    required: '请输入密码',
                    minlength: '密码长度不少于6位'
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.page);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImJhY2tncm91bmRDb2xvciIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJ2YWxpZCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJlIiwic3dpdGNoVGFiIiwidXJsIiwiY29tcG9uZW50cyIsInRvYXN0IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJ3eFZhbGlkYXRlIiwiV3hWYWxpZGF0ZSIsInRlbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhMQUdJQSxNLEdBQVM7QUFDTEMsNkJBQWlCO0FBRFosUyxRQTZCVEMsSSxHQUFPO0FBQ0hDLHFCQUFTO0FBRE4sUyxRQUlQQyxRLEdBQVc7QUFDUEMsaUJBRE8sbUJBQ0M7QUFDSix1QkFBTyxLQUFQO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVTtBQUNOQyxrQkFETSxrQkFDQ0MsQ0FERCxFQUNJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQiwrQkFBS0MsU0FBTCxDQUFlO0FBQ1hDLHlCQUFLO0FBRE0saUJBQWY7QUFHSDtBQXZCSyxTLFFBMEJWQyxVLEdBQWE7QUFDVEM7QUFEUyxTOzs7OztpQ0E3REo7QUFDTEMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxPQUFMLENBQWFDLFVBQXpCO0FBQ0EsaUJBQUtDLFVBQUwsR0FBa0IsS0FBS0YsT0FBTCxDQUFhQyxVQUFiLENBQ2Q7QUFDSUUscUJBQUs7QUFDREMsOEJBQVUsSUFEVDtBQUVERCx5QkFBSztBQUZKLGlCQURUO0FBS0lFLDBCQUFVO0FBQ05ELDhCQUFVLElBREo7QUFFTkUsK0JBQVc7QUFGTDtBQUxkLGFBRGMsRUFVWDtBQUNDSCxxQkFBSztBQUNEQyw4QkFBVSxRQURUO0FBRURELHlCQUFLO0FBRkosaUJBRE47QUFLQ0UsMEJBQVU7QUFDTkQsOEJBQVUsT0FESjtBQUVORSwrQkFBVztBQUZMO0FBTFgsYUFWVyxDQUFsQjtBQXFCSDs7OztFQTdCd0IsZUFBS0MsSSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuICAgIGltcG9ydCBhamF4IGZyb20gJy4uL2FwaSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RjlGOSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC53eFZhbGlkYXRlKVxuICAgICAgICAgICAgdGhpcy5XeFZhbGlkYXRlID0gdGhpcy4kcGFyZW50Lnd4VmFsaWRhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0ZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAn6K+36L6T5YWl5omL5py65Y+3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbDogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAn6K+36L6T5YWl5a+G56CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogJ+WvhueggemVv+W6puS4jeWwkeS6jjbkvY0nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdmFsaWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc3VibWl0KGUpIHtcbi8vICAgICAgICAgICAgICAgIGlmICghdGhpcy5XeFZhbGlkYXRlLmNoZWNrRm9ybShlKSkge1xuLy8gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5XeFZhbGlkYXRlLmVycm9yTGlzdFswXVxuLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLm1zZ1xuLy8gICAgICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2Vcbi8vICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbi8vICAgICAgICAgICAgICAgIGFqYXgubG9naW5fZ2V0VXNlckluZm8oKVxuLy8gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2Vcbi8vICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4vLyAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leaIkOWKnycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcbi8vICAgICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgICAgfSwgMTUwMClcbiAgICAgICAgICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4vaG9tZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIHRvYXN0XG4gICAgICAgIH1cbiAgICB9XG4iXX0=