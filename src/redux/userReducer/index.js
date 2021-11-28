import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token') || '',
    isAuth: false
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNIN':
            return { token: action.payload.token, isAuth: true }
        case 'AUTH_TRUE':
            return {...state, isAuth: true}
        case 'LOG_OUT':
            return initialState
        default:
            return state
    }
}