import React from 'react';
import styles from './Form.module.scss';
import {FormikErrors, useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {contactMe} from '../../../bll/auth-reducer';
import {createField} from '../../../common/Utills/form-helpers';
import {Button} from '../../../common/Button/Button';


export const Form = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        validate: (values: ContactParamsType) => {
            let errors: FormikErrors<ContactParamsType> = {};
            if (!values.email) {
                errors.email = 'Email is required!'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) {
                errors.name = 'Name is required!'
            }
            return errors
        },
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            dispatch(contactMe(values));
            formik.resetForm();
        },
    });
    return (
        <form className={styles.form_block} onSubmit={formik.handleSubmit}>
            {createField('name', 'text', formik)}
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            {createField('email', 'email', formik)}
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            {createField('message', 'textarea', formik)}
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            <Button title={'Submit'} className={styles.submit_button} callback={() => {
            }}/>
        </form>
    );
};


export type ContactParamsType = {
    email: string
    name: string
    message: string
}