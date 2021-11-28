import React from 'react';
import image from '../../components/Images/img.jpg'
import Button from "../../components/Button";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../redux/userAction";
import {Redirect, useHistory} from 'react-router-dom'
import InputForm from "../../components/InputForm";

const LoginPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuth = useSelector(s => s.isAuth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('email должен содержать @')
                .required('Введите email'),
            password: Yup.string()
                .required('Введите пароль')
        }),
        onSubmit: (values, {resetForm}) => {
            dispatch(signIn(values))
            resetForm()
        },
    })
    return (
        <div className='login-bg'>
            {isAuth && <Redirect to="/home" />}
            <div className='container login-page d-flex justify-content-center align-items-center'>
                <div className='row bg-white p-5 border border-3 rounded-3'>
                    <div className='col-md-6'>
                        <img src={image} alt="" className='login-img'/>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                        <div className='w-100'>
                            <form onSubmit={formik.handleSubmit}>
                                <h2>Member login</h2>
                                <div className='my-3'>
                                    <InputForm type='text'
                                               className='form-control rounded-pill'
                                               placeholder='Введите логин'
                                               id="email"
                                               name="email"
                                               onChange={formik.handleChange}
                                               value={formik.values.email}
                                    />
                                </div>
                                <div>
                                    <InputForm type="password"
                                               className='form-control rounded-pill'
                                               placeholder='Введите пароль'
                                               id="password"
                                               name="password"
                                               onChange={formik.handleChange}
                                               value={formik.values.password}
                                    />
                                </div>
                                <Button className='btn btn-success mt-3 w-100 rounded-pill'
                                        type='submit'
                                        text='Login'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;