'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (opt) {
    var reqUrl = testUrl + querySting({
        action: 'service',
        openId: '79e10b2e-b8c3-11e3-8d13-e41f137ad9f4',
        dbid: '7950957592',
        method: opt.interface
    });
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: reqUrl,
            data: opt.data || {},
            method: opt.method,
            dataType: opt.dataType || 'json',
            header: {
                'content-type': opt.dataType == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded'
            },
            success: function success(res) {
                resolve(res);
            },
            fail: function fail(res) {
                reject(res);
            }
        });
    });
};

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testUrl = 'http://172.20.131.42/coder/api.do';

function querySting(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        return '';
    }
    var querystr = '';
    for (var item in obj) {
        querystr += item + '=' + obj[item] + '&';
    }
    return querystr.slice(0, querystr.length - 1);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6WyJvcHQiLCJyZXFVcmwiLCJ0ZXN0VXJsIiwicXVlcnlTdGluZyIsImFjdGlvbiIsIm9wZW5JZCIsImRiaWQiLCJtZXRob2QiLCJpbnRlcmZhY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiZGF0YVR5cGUiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInF1ZXJ5c3RyIiwiaXRlbSIsInNsaWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBZWUsVUFBVUEsR0FBVixFQUFlO0FBQzFCLFFBQUlDLFNBQVNDLFVBQVVDLFdBQVc7QUFDOUJDLGdCQUFRLFNBRHNCO0FBRTlCQyxnQkFBUSxzQ0FGc0I7QUFHOUJDLGNBQU0sWUFId0I7QUFJOUJDLGdCQUFRUCxJQUFJUTtBQUprQixLQUFYLENBQXZCO0FBTUEsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLHVCQUFHQyxPQUFILENBQVc7QUFDUEMsaUJBQUtaLE1BREU7QUFFUGEsa0JBQU1kLElBQUljLElBQUosSUFBWSxFQUZYO0FBR1BQLG9CQUFRUCxJQUFJTyxNQUhMO0FBSVBRLHNCQUFVZixJQUFJZSxRQUFKLElBQWdCLE1BSm5CO0FBS1BDLG9CQUFRO0FBQ0osZ0NBQWdCaEIsSUFBSWUsUUFBSixJQUFnQixLQUFoQixHQUF3QixrQkFBeEIsR0FBNkM7QUFEekQsYUFMRDtBQVFQRSxxQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCUix3QkFBUVEsR0FBUjtBQUNILGFBVk07QUFXUEMsa0JBQU0sY0FBVUQsR0FBVixFQUFlO0FBQ2pCUCx1QkFBT08sR0FBUDtBQUNIO0FBYk0sU0FBWDtBQWVILEtBaEJNLENBQVA7QUFpQkgsQzs7QUF2Q0Q7Ozs7OztBQUVBLElBQUloQixVQUFVLG1DQUFkOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JpQixHQUFwQixFQUF5QjtBQUNyQixRQUFJQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEdBQS9CLE1BQXdDLGlCQUE1QyxFQUErRDtBQUMzRCxlQUFPLEVBQVA7QUFDSDtBQUNELFFBQUlLLFdBQVcsRUFBZjtBQUNBLFNBQUksSUFBSUMsSUFBUixJQUFnQk4sR0FBaEIsRUFBb0I7QUFDaEJLLG9CQUFhQyxPQUFPLEdBQVAsR0FBYU4sSUFBSU0sSUFBSixDQUFiLEdBQXlCLEdBQXRDO0FBQ0g7QUFDRCxXQUFPRCxTQUFTRSxLQUFULENBQWUsQ0FBZixFQUFtQkYsU0FBU0csTUFBVCxHQUFrQixDQUFyQyxDQUFQO0FBQ0giLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdwIGZyb20gJ3dlcHknXG5cbmxldCB0ZXN0VXJsID0gJ2h0dHA6Ly8xNzIuMjAuMTMxLjQyL2NvZGVyL2FwaS5kbydcblxuZnVuY3Rpb24gcXVlcnlTdGluZyhvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBsZXQgcXVlcnlzdHIgPSAnJ1xuICAgIGZvcihsZXQgaXRlbSBpbiBvYmope1xuICAgICAgICBxdWVyeXN0ciArPSAoaXRlbSArICc9JyArIG9ialtpdGVtXSArICcmJylcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5c3RyLnNsaWNlKDAsIChxdWVyeXN0ci5sZW5ndGggLSAxKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdCkge1xuICAgIGxldCByZXFVcmwgPSB0ZXN0VXJsICsgcXVlcnlTdGluZyh7XG4gICAgICAgIGFjdGlvbjogJ3NlcnZpY2UnLFxuICAgICAgICBvcGVuSWQ6ICc3OWUxMGIyZS1iOGMzLTExZTMtOGQxMy1lNDFmMTM3YWQ5ZjQnLFxuICAgICAgICBkYmlkOiAnNzk1MDk1NzU5MicsXG4gICAgICAgIG1ldGhvZDogb3B0LmludGVyZmFjZVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd3AucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHJlcVVybCxcbiAgICAgICAgICAgIGRhdGE6IG9wdC5kYXRhIHx8IHt9LFxuICAgICAgICAgICAgbWV0aG9kOiBvcHQubWV0aG9kLFxuICAgICAgICAgICAgZGF0YVR5cGU6IG9wdC5kYXRhVHlwZSB8fCAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogb3B0LmRhdGFUeXBlID09ICdHRVQnID8gJ2FwcGxpY2F0aW9uL2pzb24nIDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbiJdfQ==