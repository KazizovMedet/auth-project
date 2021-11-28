import axios from "axios";
import Cookies from 'js-cookie'
import {history} from "../../lib/history";

export const signIn = (values) => {
    return (dispatch) => {
        axios.post('https://site.ualegion.com/api/v1/security/login', values)
            .then(({data}) => {
                Cookies.set('token', data.token, {expires: 1})
                dispatch({type: 'USER_SIGNIN', payload: data})
            })
    }
}
export const logout = () => {
    history.push('/login')
    Cookies.remove('token')
    return {type: 'LOG_OUT'}
}

// export const authenticate = () =>{
//     return {type: 'AUTH_TRUE'}
// }