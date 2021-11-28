import React, {useEffect} from 'react';
import { Router, Redirect, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import {history} from "./lib/history";
import {useDispatch, useSelector} from "react-redux";
// import {authenticate} from "./redux/userAction";

const App = () => {
    const token = useSelector(s => s.token)
    const dispatch = useDispatch()
    // useEffect(() => {
    //    if (token){
    //        dispatch(authenticate())
    //    }
    // },[dispatch, token])
    return (
        <Router history={history}>
            <Redirect to='/login'>{'/'}</Redirect>
            <Route exact path='/login'><LoginPage/></Route>
            <PrivateRoute exact path='/home' component={HomePage}/>
        </Router>
    );
};

export default App;