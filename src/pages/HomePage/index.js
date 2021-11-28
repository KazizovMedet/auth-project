import React from 'react';
import Button from "../../components/Button";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/userAction";

const HomePage = () => {
    const dispatch = useDispatch()
    const userLogout = () =>{
        dispatch(logout())
    }
    return (
        <div className='container'>
            <div>
                <h1>Home page</h1>
                <Button text='Logout'
                        className='btn btn-danger mt-3 rounded-pill'
                        onClick={userLogout}
                />
            </div>
        </div>
    );
};

export default HomePage;