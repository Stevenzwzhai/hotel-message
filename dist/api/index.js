'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _server = require('./server.js');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    login_getUserInfo: function login_getUserInfo() {
        return (0, _server2.default)({
            method: 'GET',
            dataType: '',
            interface: 'getUserinfos'
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImxvZ2luX2dldFVzZXJJbmZvIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNYQSxxQkFEVywrQkFDVTtBQUNqQixlQUFPLHNCQUFPO0FBQ1ZDLG9CQUFRLEtBREU7QUFFVkMsc0JBQVUsRUFGQTtBQUdWQyx1QkFBVztBQUhELFNBQVAsQ0FBUDtBQUtIO0FBUFUsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3cCBmcm9tICd3ZXB5J1xuaW1wb3J0IHNlcnZlciBmcm9tICcuL3NlcnZlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvZ2luX2dldFVzZXJJbmZvICgpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlcih7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICcnLFxuICAgICAgICAgICAgaW50ZXJmYWNlOiAnZ2V0VXNlcmluZm9zJ1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==