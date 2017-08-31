'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 表单验证
 *
 * @param {Object} rules 验证字段的规则
 * @param {Object} messages 验证字段的提示信息
 *
 */
var WxValidate = function () {
    function WxValidate() {
        var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, WxValidate);

        Object.assign(this, {
            rules: rules,
            messages: messages
        });
        this.__init();
    }

    /**
     * __init
     */


    _createClass(WxValidate, [{
        key: '__init',
        value: function __init() {
            this.__initMethods();
            this.__initDefaults();
            this.__initData();
        }

        /**
         * 初始化数据
         */

    }, {
        key: '__initData',
        value: function __initData() {
            this.form = {};
            this.errorList = [];
        }

        /**
         * 初始化默认提示信息
         */

    }, {
        key: '__initDefaults',
        value: function __initDefaults() {
            this.defaults = {
                messages: {
                    required: '这是必填字段。',
                    email: '请输入有效的电子邮件地址。',
                    tel: '请输入11位的手机号码。',
                    url: '请输入有效的网址。',
                    date: '请输入有效的日期。',
                    dateISO: '请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。',
                    number: '请输入有效的数字。',
                    digits: '只能输入数字。',
                    idcard: '请输入18位的有效身份证。',
                    equalTo: this.formatTpl('输入值必须和 {0} 相同。'),
                    contains: this.formatTpl('输入值必须包含 {0}。'),
                    minlength: this.formatTpl('最少要输入 {0} 个字符。'),
                    maxlength: this.formatTpl('最多可以输入 {0} 个字符。'),
                    rangelength: this.formatTpl('请输入长度在 {0} 到 {1} 之间的字符。'),
                    min: this.formatTpl('请输入不小于 {0} 的数值。'),
                    max: this.formatTpl('请输入不大于 {0} 的数值。'),
                    range: this.formatTpl('请输入范围在 {0} 到 {1} 之间的数值。')
                }
            };
        }

        /**
         * 初始化默认验证方法
         */

    }, {
        key: '__initMethods',
        value: function __initMethods() {
            var that = this;
            that.methods = {
                /**
                 * 验证必填元素
                 */
                required: function required(value, param) {
                    if (!that.depend(param)) {
                        return 'dependency-mismatch';
                    } else if (typeof value === 'number') {
                        value = value.toString();
                    } else if (typeof value === 'boolean') {
                        return !0;
                    }

                    return value.length > 0;
                },

                /**
                 * 验证电子邮箱格式
                 */
                email: function email(value) {
                    return that.optional(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
                },

                /**
                 * 验证手机格式
                 */
                tel: function tel(value) {
                    return that.optional(value) || /^1[34578]\d{9}$/.test(value);
                },

                /**
                 * 验证URL格式
                 */
                url: function url(value) {
                    return that.optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
                },

                /**
                 * 验证日期格式
                 */
                date: function date(value) {
                    return that.optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
                },

                /**
                 * 验证ISO类型的日期格式
                 */
                dateISO: function dateISO(value) {
                    return that.optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
                },

                /**
                 * 验证十进制数字
                 */
                number: function number(value) {
                    return that.optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
                },

                /**
                 * 验证整数
                 */
                digits: function digits(value) {
                    return that.optional(value) || /^\d+$/.test(value);
                },

                /**
                 * 验证身份证号码
                 */
                idcard: function idcard(value) {
                    return that.optional(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
                },

                /**
                 * 验证两个输入框的内容是否相同
                 */
                equalTo: function equalTo(value, param) {
                    return that.optional(value) || value === that.scope.detail.value[param];
                },

                /**
                 * 验证是否包含某个值
                 */
                contains: function contains(value, param) {
                    return that.optional(value) || value.indexOf(param) >= 0;
                },

                /**
                 * 验证最小长度
                 */
                minlength: function minlength(value, param) {
                    return that.optional(value) || value.length >= param;
                },

                /**
                 * 验证最大长度
                 */
                maxlength: function maxlength(value, param) {
                    return that.optional(value) || value.length <= param;
                },

                /**
                 * 验证一个长度范围[min, max]
                 */
                rangelength: function rangelength(value, param) {
                    return that.optional(value) || value.length >= param[0] && value.length <= param[1];
                },

                /**
                 * 验证最小值
                 */
                min: function min(value, param) {
                    return that.optional(value) || value >= param;
                },

                /**
                 * 验证最大值
                 */
                max: function max(value, param) {
                    return that.optional(value) || value <= param;
                },

                /**
                 * 验证一个值范围[min, max]
                 */
                range: function range(value, param) {
                    return that.optional(value) || value >= param[0] && value <= param[1];
                }
            };
        }

        /**
         * 添加自定义验证方法
         * @param {String} name 方法名
         * @param {Function} method 函数体，接收两个参数(value, param)，value表示元素的值，param表示参数
         * @param {String} message 提示信息
         */

    }, {
        key: 'addMethod',
        value: function addMethod(name, method, message) {
            this.methods[name] = method;
            this.defaults.messages[name] = message !== undefined ? message : this.defaults.messages[name];
        }

        /**
         * 判断验证方法是否存在
         */

    }, {
        key: 'isValidMethod',
        value: function isValidMethod(value) {
            var methods = [];
            for (var method in this.methods) {
                if (method && typeof this.methods[method] === 'function') {
                    methods.push(method);
                }
            }
            return methods.indexOf(value) !== -1;
        }

        /**
         * 格式化提示信息模板
         */

    }, {
        key: 'formatTpl',
        value: function formatTpl(source, params) {
            var that = this;
            if (arguments.length === 1) {
                return function () {
                    var args = Array.from(arguments);
                    args.unshift(source);
                    return that.formatTpl.apply(this, args);
                };
            }
            if (params === undefined) {
                return source;
            }
            if (arguments.length > 2 && params.constructor !== Array) {
                params = Array.from(arguments).slice(1);
            }
            if (params.constructor !== Array) {
                params = [params];
            }
            params.forEach(function (n, i) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
                    return n;
                });
            });
            return source;
        }

        /**
         * 判断规则依赖是否存在
         */

    }, {
        key: 'depend',
        value: function depend(param) {
            switch (typeof param === 'undefined' ? 'undefined' : _typeof(param)) {
                case 'boolean':
                    param = param;
                    break;
                case 'string':
                    param = !!param.length;
                    break;
                case 'function':
                    param = param();
                default:
                    param = !0;
            }
            return param;
        }

        /**
         * 判断输入值是否为空
         */

    }, {
        key: 'optional',
        value: function optional(value) {
            return !this.methods.required(value) && 'dependency-mismatch';
        }

        /**
         * 获取自定义字段的提示信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         */

    }, {
        key: 'customMessage',
        value: function customMessage(param, rule) {
            var params = this.messages[param];
            var isObject = (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object';
            if (params && isObject) return params[rule.method];
        }

        /**
         * 获取某个指定字段的提示信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         */

    }, {
        key: 'defaultMessage',
        value: function defaultMessage(param, rule) {
            var message = this.customMessage(param, rule) || this.defaults.messages[rule.method];
            var type = typeof message === 'undefined' ? 'undefined' : _typeof(message);

            if (type === 'undefined') {
                message = 'Warning: No message defined for ' + rule.method + '.';
            } else if (type === 'function') {
                message = message.call(this, rule.parameters);
            }

            return message;
        }

        /**
         * 缓存错误信息
         * @param {String} param 字段名
         * @param {Object} rule 规则
         * @param {String} value 元素的值
         */

    }, {
        key: 'formatTplAndAdd',
        value: function formatTplAndAdd(param, rule, value) {
            var msg = this.defaultMessage(param, rule);

            this.errorList.push({
                param: param,
                msg: msg,
                value: value
            });
        }

        /**
         * 验证某个指定字段的规则
         * @param {String} param 字段名
         * @param {Object} rules 规则
         * @param {Object} event 表单数据对象
         */

    }, {
        key: 'checkParam',
        value: function checkParam(param, rules, event) {

            // 缓存表单数据对象
            this.scope = event;

            // 缓存字段对应的值
            var data = event.detail.value;
            var value = data[param] !== null && data[param] !== undefined ? data[param] : '';

            // 遍历某个指定字段的所有规则，依次验证规则，否则缓存错误信息
            for (var method in rules) {

                // 判断验证方法是否存在
                if (this.isValidMethod(method)) {

                    // 缓存规则的属性及值
                    var rule = {
                        method: method,
                        parameters: rules[method]

                        // 调用验证方法
                    };var result = this.methods[method](value, rule.parameters);

                    // 若result返回值为dependency-mismatch，则说明该字段的值为空或非必填字段
                    if (result === 'dependency-mismatch') {
                        continue;
                    }

                    this.setValue(param, method, result, value);

                    // 判断是否通过验证，否则缓存错误信息，跳出循环
                    if (!result) {
                        this.formatTplAndAdd(param, rule, value);
                        break;
                    }
                }
            }
        }

        /**
         * 设置字段的默认验证值
         * @param {String} param 字段名
         */

    }, {
        key: 'setView',
        value: function setView(param) {
            this.form[param] = {
                $name: param,
                $valid: true,
                $invalid: false,
                $error: {},
                $success: {},
                $viewValue: ''
            };
        }

        /**
         * 设置字段的验证值
         * @param {String} param 字段名
         * @param {String} method 字段的方法
         * @param {Boolean} result 是否通过验证
         * @param {String} value 字段的值
         */

    }, {
        key: 'setValue',
        value: function setValue(param, method, result, value) {
            var params = this.form[param];
            params.$valid = result;
            params.$invalid = !result;
            params.$error[method] = !result;
            params.$success[method] = result;
            params.$viewValue = value;
        }

        /**
         * 验证所有字段的规则，返回验证是否通过
         * @param {Object} event 表单数据对象
         */

    }, {
        key: 'checkForm',
        value: function checkForm(event) {
            this.__initData();

            for (var param in this.rules) {
                this.setView(param);
                this.checkParam(param, this.rules[param], event);
            }

            return this.valid();
        }

        /**
         * 返回验证是否通过
         */

    }, {
        key: 'valid',
        value: function valid() {
            return this.size() === 0;
        }

        /**
         * 返回错误信息的个数
         */

    }, {
        key: 'size',
        value: function size() {
            return this.errorList.length;
        }

        /**
         * 返回所有错误信息
         */

    }, {
        key: 'validationErrors',
        value: function validationErrors() {
            return this.errorList;
        }
    }]);

    return WxValidate;
}();

exports.default = WxValidate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4VmFsaWRhdGUuanMiXSwibmFtZXMiOlsiV3hWYWxpZGF0ZSIsInJ1bGVzIiwibWVzc2FnZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJfX2luaXQiLCJfX2luaXRNZXRob2RzIiwiX19pbml0RGVmYXVsdHMiLCJfX2luaXREYXRhIiwiZm9ybSIsImVycm9yTGlzdCIsImRlZmF1bHRzIiwicmVxdWlyZWQiLCJlbWFpbCIsInRlbCIsInVybCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiaWRjYXJkIiwiZXF1YWxUbyIsImZvcm1hdFRwbCIsImNvbnRhaW5zIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwicmFuZ2VsZW5ndGgiLCJtaW4iLCJtYXgiLCJyYW5nZSIsInRoYXQiLCJtZXRob2RzIiwidmFsdWUiLCJwYXJhbSIsImRlcGVuZCIsInRvU3RyaW5nIiwibGVuZ3RoIiwib3B0aW9uYWwiLCJ0ZXN0IiwiRGF0ZSIsInNjb3BlIiwiZGV0YWlsIiwiaW5kZXhPZiIsIm5hbWUiLCJtZXRob2QiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwicHVzaCIsInNvdXJjZSIsInBhcmFtcyIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJ1bnNoaWZ0IiwiYXBwbHkiLCJjb25zdHJ1Y3RvciIsInNsaWNlIiwiZm9yRWFjaCIsIm4iLCJpIiwicmVwbGFjZSIsIlJlZ0V4cCIsInJ1bGUiLCJpc09iamVjdCIsImN1c3RvbU1lc3NhZ2UiLCJ0eXBlIiwiY2FsbCIsInBhcmFtZXRlcnMiLCJtc2ciLCJkZWZhdWx0TWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImlzVmFsaWRNZXRob2QiLCJyZXN1bHQiLCJzZXRWYWx1ZSIsImZvcm1hdFRwbEFuZEFkZCIsIiRuYW1lIiwiJHZhbGlkIiwiJGludmFsaWQiLCIkZXJyb3IiLCIkc3VjY2VzcyIsIiR2aWV3VmFsdWUiLCJzZXRWaWV3IiwiY2hlY2tQYXJhbSIsInZhbGlkIiwic2l6ZSJdLCJtYXBwaW5n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cUJBQUtrRixPQUFMLENBQWFsRCxLQUFiO0FBQ0EscUJBQUttRCxVQUFMLENBQWdCbkQsS0FBaEIsRUFBdUIsS0FBS2hDLEtBQUwsQ0FBV2dDLEtBQVgsQ0FBdkIsRUFBMENzQyxLQUExQztBQUNIOztBQUVELG1CQUFPLEtBQUtjLEtBQUwsRUFBUDtBQUNIOztBQUVEOzs7Ozs7Z0NBR1E7QUFDSixtQkFBTyxLQUFLQyxJQUFMLE9BQWdCLENBQXZCO0FBQ0g7O0FBRUQ7Ozs7OzsrQkFHTztBQUNILG1CQUFPLEtBQUs1RSxTQUFMLENBQWUwQixNQUF0QjtBQUNIOztBQUVEOzs7Ozs7MkNBR21CO0FBQ2YsbUJBQU8sS0FBSzFCLFNBQVo7QUFDSDs7Ozs7O2tCQUdVVixVIiwiZmlsZSI6Ind4VmFsaWRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOihqOWNlemqjOivgVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyDpqozor4HlrZfmrrXnmoTop4TliJlcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlcyDpqozor4HlrZfmrrXnmoTmj5DnpLrkv6Hmga9cbiAqXG4gKi9cbmNsYXNzIFd4VmFsaWRhdGUge1xuICAgIGNvbnN0cnVjdG9yKHJ1bGVzID0ge30sIG1lc3NhZ2VzID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9faW5pdCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogX19pbml0XG4gICAgICovXG4gICAgX19pbml0KCkge1xuICAgICAgICB0aGlzLl9faW5pdE1ldGhvZHMoKVxuICAgICAgICB0aGlzLl9faW5pdERlZmF1bHRzKClcbiAgICAgICAgdGhpcy5fX2luaXREYXRhKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmlbDmja5cbiAgICAgKi9cbiAgICBfX2luaXREYXRhKCkge1xuICAgICAgICB0aGlzLmZvcm0gPSB7fVxuICAgICAgICB0aGlzLmVycm9yTGlzdCA9IFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6buY6K6k5o+Q56S65L+h5oGvXG4gICAgICovXG4gICAgX19pbml0RGVmYXVsdHMoKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAn6L+Z5piv5b+F5aGr5a2X5q6144CCJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ+ivt+i+k+WFpeacieaViOeahOeUteWtkOmCruS7tuWcsOWdgOOAgicsXG4gICAgICAgICAgICAgICAgdGVsOiAn6K+36L6T5YWlMTHkvY3nmoTmiYvmnLrlj7fnoIHjgIInLFxuICAgICAgICAgICAgICAgIHVybDogJ+ivt+i+k+WFpeacieaViOeahOe9keWdgOOAgicsXG4gICAgICAgICAgICAgICAgZGF0ZTogJ+ivt+i+k+WFpeacieaViOeahOaXpeacn+OAgicsXG4gICAgICAgICAgICAgICAgZGF0ZUlTTzogJ+ivt+i+k+WFpeacieaViOeahOaXpeacn++8iElTT++8ie+8jOS+i+Wmgu+8mjIwMDktMDYtMjPvvIwxOTk4LzAxLzIy44CCJyxcbiAgICAgICAgICAgICAgICBudW1iZXI6ICfor7fovpPlhaXmnInmlYjnmoTmlbDlrZfjgIInLFxuICAgICAgICAgICAgICAgIGRpZ2l0czogJ+WPquiDvei+k+WFpeaVsOWtl+OAgicsXG4gICAgICAgICAgICAgICAgaWRjYXJkOiAn6K+36L6T5YWlMTjkvY3nmoTmnInmlYjouqvku73or4HjgIInLFxuICAgICAgICAgICAgICAgIGVxdWFsVG86IHRoaXMuZm9ybWF0VHBsKCfovpPlhaXlgLzlv4XpobvlkowgezB9IOebuOWQjOOAgicpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiB0aGlzLmZvcm1hdFRwbCgn6L6T5YWl5YC85b+F6aG75YyF5ZCrIHswfeOAgicpLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogdGhpcy5mb3JtYXRUcGwoJ+acgOWwkeimgei+k+WFpSB7MH0g5Liq5a2X56ym44CCJyksXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiB0aGlzLmZvcm1hdFRwbCgn5pyA5aSa5Y+v5Lul6L6T5YWlIHswfSDkuKrlrZfnrKbjgIInKSxcbiAgICAgICAgICAgICAgICByYW5nZWxlbmd0aDogdGhpcy5mb3JtYXRUcGwoJ+ivt+i+k+WFpemVv+W6puWcqCB7MH0g5YiwIHsxfSDkuYvpl7TnmoTlrZfnrKbjgIInKSxcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMuZm9ybWF0VHBsKCfor7fovpPlhaXkuI3lsI/kuo4gezB9IOeahOaVsOWAvOOAgicpLFxuICAgICAgICAgICAgICAgIG1heDogdGhpcy5mb3JtYXRUcGwoJ+ivt+i+k+WFpeS4jeWkp+S6jiB7MH0g55qE5pWw5YC844CCJyksXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRoaXMuZm9ybWF0VHBsKCfor7fovpPlhaXojIPlm7TlnKggezB9IOWIsCB7MX0g5LmL6Ze055qE5pWw5YC844CCJyksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpu5jorqTpqozor4Hmlrnms5VcbiAgICAgKi9cbiAgICBfX2luaXRNZXRob2RzKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICB0aGF0Lm1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmqjOivgeW/heWhq+WFg+e0oFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXF1aXJlZCh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoYXQuZGVwZW5kKHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlcGVuZGVuY3ktbWlzbWF0Y2gnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmqjOivgeeUteWtkOmCrueuseagvOW8j1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5omL5py65qC85byPXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRlbCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXjFbMzQ1NzhdXFxkezl9JC8udGVzdCh2YWx1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmqjOivgVVSTOagvOW8j1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cmwodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QodmFsdWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpqozor4Hml6XmnJ/moLzlvI9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAhL0ludmFsaWR8TmFOLy50ZXN0KG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+BSVNP57G75Z6L55qE5pel5pyf5qC85byPXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRhdGVJU08odmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgL15cXGR7NH1bXFwvXFwtXSgwP1sxLTldfDFbMDEyXSlbXFwvXFwtXSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5Y2B6L+b5Yi25pWw5a2XXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG51bWJlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5pW05pWwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRpZ2l0cyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXlxcZCskLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B6Lqr5Lu96K+B5Y+356CBXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlkY2FyZCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCAvXlsxLTldXFxkezV9WzEtOV1cXGR7M30oKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKVxcZHszfShbMC05XXxYKSQvLnRlc3QodmFsdWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpqozor4HkuKTkuKrovpPlhaXmoYbnmoTlhoXlrrnmmK/lkKbnm7jlkIxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZXF1YWxUbyh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPT09IHRoYXQuc2NvcGUuZGV0YWlsLnZhbHVlW3BhcmFtXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5piv5ZCm5YyF5ZCr5p+Q5Liq5YC8XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRhaW5zKHZhbHVlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCB2YWx1ZS5pbmRleE9mKHBhcmFtKSA+PSAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpqozor4HmnIDlsI/plb/luqZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWlubGVuZ3RoKHZhbHVlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPj0gcGFyYW1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmqjOivgeacgOWkp+mVv+W6plxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXhsZW5ndGgodmFsdWUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA8PSBwYXJhbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5LiA5Liq6ZW/5bqm6IyD5Zu0W21pbiwgbWF4XVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByYW5nZWxlbmd0aCh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgKHZhbHVlLmxlbmd0aCA+PSBwYXJhbVswXSAmJiB2YWx1ZS5sZW5ndGggPD0gcGFyYW1bMV0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpqozor4HmnIDlsI/lgLxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWluKHZhbHVlLCBwYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Lm9wdGlvbmFsKHZhbHVlKSB8fCB2YWx1ZSA+PSBwYXJhbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6aqM6K+B5pyA5aSn5YC8XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1heCh2YWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5vcHRpb25hbCh2YWx1ZSkgfHwgdmFsdWUgPD0gcGFyYW1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmqjOivgeS4gOS4quWAvOiMg+WbtFttaW4sIG1heF1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmFuZ2UodmFsdWUsIHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQub3B0aW9uYWwodmFsdWUpIHx8ICh2YWx1ZSA+PSBwYXJhbVswXSAmJiB2YWx1ZSA8PSBwYXJhbVsxXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDoh6rlrprkuYnpqozor4Hmlrnms5VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDmlrnms5XlkI1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXRob2Qg5Ye95pWw5L2T77yM5o6l5pS25Lik5Liq5Y+C5pWwKHZhbHVlLCBwYXJhbSnvvIx2YWx1ZeihqOekuuWFg+e0oOeahOWAvO+8jHBhcmFt6KGo56S65Y+C5pWwXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2Ug5o+Q56S65L+h5oGvXG4gICAgICovXG4gICAgYWRkTWV0aG9kKG5hbWUsIG1ldGhvZCwgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1ldGhvZHNbbmFtZV0gPSBtZXRob2RcbiAgICAgICAgdGhpcy5kZWZhdWx0cy5tZXNzYWdlc1tuYW1lXSA9IG1lc3NhZ2UgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UgOiB0aGlzLmRlZmF1bHRzLm1lc3NhZ2VzW25hbWVdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat6aqM6K+B5pa55rOV5piv5ZCm5a2Y5ZyoXG4gICAgICovXG4gICAgaXNWYWxpZE1ldGhvZCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWV0aG9kcyA9IFtdXG4gICAgICAgIGZvciAobGV0IG1ldGhvZCBpbiB0aGlzLm1ldGhvZHMpIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QgJiYgdHlwZW9mIHRoaXMubWV0aG9kc1ttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5wdXNoKG1ldGhvZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLzlvI/ljJbmj5DnpLrkv6Hmga/mqKHmnb9cbiAgICAgKi9cbiAgICBmb3JtYXRUcGwoc291cmNlLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgIGFyZ3MudW5zaGlmdChzb3VyY2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuZm9ybWF0VHBsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHBhcmFtcy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IEFycmF5LmZyb20oYXJndW1lbnRzKS5zbGljZSgxKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XG4gICAgICAgICAgICBwYXJhbXMgPSBbcGFyYW1zXVxuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uKG4sIGkpIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxce1wiICsgaSArIFwiXFxcXH1cIiwgXCJnXCIpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHNvdXJjZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreinhOWImeS+nei1luaYr+WQpuWtmOWcqFxuICAgICAqL1xuICAgIGRlcGVuZChwYXJhbSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwYXJhbSkge1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcGFyYW0gPSBwYXJhbVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIHBhcmFtID0gISFwYXJhbS5sZW5ndGhcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHBhcmFtID0gcGFyYW0oKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBwYXJhbSA9ICEwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yik5pat6L6T5YWl5YC85piv5ZCm5Li656m6XG4gICAgICovXG4gICAgb3B0aW9uYWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm1ldGhvZHMucmVxdWlyZWQodmFsdWUpICYmICdkZXBlbmRlbmN5LW1pc21hdGNoJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluiHquWumuS5ieWtl+auteeahOaPkOekuuS/oeaBr1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbSDlrZfmrrXlkI1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZSDop4TliJlcbiAgICAgKi9cbiAgICBjdXN0b21NZXNzYWdlKHBhcmFtLCBydWxlKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMubWVzc2FnZXNbcGFyYW1dXG4gICAgICAgIGNvbnN0IGlzT2JqZWN0ID0gdHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCdcbiAgICAgICAgaWYgKHBhcmFtcyAmJiBpc09iamVjdCkgcmV0dXJuIHBhcmFtc1tydWxlLm1ldGhvZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmn5DkuKrmjIflrprlrZfmrrXnmoTmj5DnpLrkv6Hmga9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0g5a2X5q615ZCNXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJ1bGUg6KeE5YiZXG4gICAgICovXG4gICAgZGVmYXVsdE1lc3NhZ2UocGFyYW0sIHJ1bGUpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmN1c3RvbU1lc3NhZ2UocGFyYW0sIHJ1bGUpIHx8IHRoaXMuZGVmYXVsdHMubWVzc2FnZXNbcnVsZS5tZXRob2RdXG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIG1lc3NhZ2VcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgV2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciAke3J1bGUubWV0aG9kfS5gXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UuY2FsbCh0aGlzLCBydWxlLnBhcmFtZXRlcnMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe8k+WtmOmUmeivr+S/oeaBr1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbSDlrZfmrrXlkI1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZSDop4TliJlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUg5YWD57Sg55qE5YC8XG4gICAgICovXG4gICAgZm9ybWF0VHBsQW5kQWRkKHBhcmFtLCBydWxlLCB2YWx1ZSkge1xuICAgICAgICBsZXQgbXNnID0gdGhpcy5kZWZhdWx0TWVzc2FnZShwYXJhbSwgcnVsZSlcblxuICAgICAgICB0aGlzLmVycm9yTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIHBhcmFtOiBwYXJhbSxcbiAgICAgICAgICAgIG1zZzogbXNnLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmqjOivgeafkOS4quaMh+WumuWtl+auteeahOinhOWImVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbSDlrZfmrrXlkI1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZXMg6KeE5YiZXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOihqOWNleaVsOaNruWvueixoVxuICAgICAqL1xuICAgIGNoZWNrUGFyYW0ocGFyYW0sIHJ1bGVzLCBldmVudCkge1xuXG4gICAgICAgIC8vIOe8k+WtmOihqOWNleaVsOaNruWvueixoVxuICAgICAgICB0aGlzLnNjb3BlID0gZXZlbnRcblxuICAgICAgICAvLyDnvJPlrZjlrZfmrrXlr7nlupTnmoTlgLxcbiAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRhdGFbcGFyYW1dICE9PSBudWxsICYmIGRhdGFbcGFyYW1dICE9PSB1bmRlZmluZWQgPyBkYXRhW3BhcmFtXSA6ICcnXG5cbiAgICAgICAgLy8g6YGN5Y6G5p+Q5Liq5oyH5a6a5a2X5q6155qE5omA5pyJ6KeE5YiZ77yM5L6d5qyh6aqM6K+B6KeE5YiZ77yM5ZCm5YiZ57yT5a2Y6ZSZ6K+v5L+h5oGvXG4gICAgICAgIGZvciAobGV0IG1ldGhvZCBpbiBydWxlcykge1xuXG4gICAgICAgICAgICAvLyDliKTmlq3pqozor4Hmlrnms5XmmK/lkKblrZjlnKhcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRNZXRob2QobWV0aG9kKSkge1xuXG4gICAgICAgICAgICAgICAgLy8g57yT5a2Y6KeE5YiZ55qE5bGe5oCn5Y+K5YC8XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHJ1bGVzW21ldGhvZF1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDosIPnlKjpqozor4Hmlrnms5VcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1ldGhvZHNbbWV0aG9kXSh2YWx1ZSwgcnVsZS5wYXJhbWV0ZXJzKVxuXG4gICAgICAgICAgICAgICAgLy8g6IulcmVzdWx06L+U5Zue5YC85Li6ZGVwZW5kZW5jeS1taXNtYXRjaO+8jOWImeivtOaYjuivpeWtl+auteeahOWAvOS4uuepuuaIlumdnuW/heWhq+Wtl+autVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdkZXBlbmRlbmN5LW1pc21hdGNoJykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUocGFyYW0sIG1ldGhvZCwgcmVzdWx0LCB2YWx1ZSlcblxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpumAmui/h+mqjOivge+8jOWQpuWImee8k+WtmOmUmeivr+S/oeaBr++8jOi3s+WHuuW+queOr1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0VHBsQW5kQWRkKHBhcmFtLCBydWxlLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lrZfmrrXnmoTpu5jorqTpqozor4HlgLxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0g5a2X5q615ZCNXG4gICAgICovXG4gICAgc2V0VmlldyhwYXJhbSkge1xuICAgICAgICB0aGlzLmZvcm1bcGFyYW1dID0ge1xuICAgICAgICAgICAgJG5hbWU6IHBhcmFtLFxuICAgICAgICAgICAgJHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgJGludmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgJGVycm9yOiB7fSxcbiAgICAgICAgICAgICRzdWNjZXNzOiB7fSxcbiAgICAgICAgICAgICR2aWV3VmFsdWU6IGBgLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5a2X5q6155qE6aqM6K+B5YC8XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIOWtl+auteWQjVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2Qg5a2X5q6155qE5pa55rOVXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXN1bHQg5piv5ZCm6YCa6L+H6aqM6K+BXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIOWtl+auteeahOWAvFxuICAgICAqL1xuICAgIHNldFZhbHVlKHBhcmFtLCBtZXRob2QsIHJlc3VsdCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5mb3JtW3BhcmFtXVxuICAgICAgICBwYXJhbXMuJHZhbGlkID0gcmVzdWx0XG4gICAgICAgIHBhcmFtcy4kaW52YWxpZCA9ICFyZXN1bHRcbiAgICAgICAgcGFyYW1zLiRlcnJvclttZXRob2RdID0gIXJlc3VsdFxuICAgICAgICBwYXJhbXMuJHN1Y2Nlc3NbbWV0aG9kXSA9IHJlc3VsdFxuICAgICAgICBwYXJhbXMuJHZpZXdWYWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6aqM6K+B5omA5pyJ5a2X5q6155qE6KeE5YiZ77yM6L+U5Zue6aqM6K+B5piv5ZCm6YCa6L+HXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IOihqOWNleaVsOaNruWvueixoVxuICAgICAqL1xuICAgIGNoZWNrRm9ybShldmVudCkge1xuICAgICAgICB0aGlzLl9faW5pdERhdGEoKVxuXG4gICAgICAgIGZvciAobGV0IHBhcmFtIGluIHRoaXMucnVsZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlldyhwYXJhbSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQYXJhbShwYXJhbSwgdGhpcy5ydWxlc1twYXJhbV0sIGV2ZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/lOWbnumqjOivgeaYr+WQpumAmui/h1xuICAgICAqL1xuICAgIHZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57plJnor6/kv6Hmga/nmoTkuKrmlbBcbiAgICAgKi9cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvckxpc3QubGVuZ3RoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5omA5pyJ6ZSZ6K+v5L+h5oGvXG4gICAgICovXG4gICAgdmFsaWRhdGlvbkVycm9ycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXeFZhbGlkYXRlXG4iXX0=