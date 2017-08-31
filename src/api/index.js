import wp from 'wepy'
import server from './server'

export default {
    login_getUserInfo () {
        return server({
            method: 'GET',
            dataType: '',
            interface: 'getUserinfos'
        })
    }
}
