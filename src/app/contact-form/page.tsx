'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './page.css';

interface FormValues {
    name: string;
    email: string;
    company_name: string;
    ph_no: number;
    subject: string;
    e_procedure: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    company_name: Yup.string().required('Company name is required'),
    ph_no: Yup.number().typeError('Phone number must be a number').required('Phone number is required'),
    subject: Yup.string().required('Subject is required'),
    e_procedure: Yup.string().required('Description is required'),
});

const page: React.FC = () => {
    const handleSubmit = (values: FormValues, actions: any) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    return (
        <div className="container shadow p-3 mb-5 bg-body rounded pagecss">
            <h4>Have any questions for us?</h4>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    company_name: '',
                    ph_no: 9999,
                    subject: '',
                    e_procedure: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className='row form-input'>
                            <div className='col col-lg-6'>
                                <Field type='text' className='form-control inputcss' id='name' name='name' placeholder='Name' />
                                <ErrorMessage name='name' component='div' className='error-message' />
                            </div>
                            <div className="col col-lg-6">
                                <input type="email" className="form-control inputcss" id="email" name='email' placeholder='Work Email' />
                                <ErrorMessage name='email' component='div' className='error-message' />
                            </div>
                        </div>
                        <div className='row form-input'>
                            <div className="col col-lg-6" >
                                <Field type="text" className="form-control inputcss" id="company_name" name='company_name' placeholder='Company Name' />
                                <ErrorMessage name='company_name' component='div' className='error-message' />
                            </div>
                            <div className="col col-lg-6">
                                <Field type="number" className="form-control inputcss" id="ph_no" name='ph_no' placeholder='Phone Number' />
                                <ErrorMessage name='ph_no' component='div' className='error-message' />
                            </div>
                        </div>
                        <div className='row form-input'>
                            <div>
                                <Field type="text" className="form-control inputcss" id="subject" name='subject' placeholder='Subject for connecting' />
                                <ErrorMessage name='subject' component='div' className='error-message' />
                            </div>
                        </div>
                        <div className='row form-input'>
                            <div>
                                <Field
                                    as='textarea'
                                    className='form-control inputcss'
                                    id='e_procedure'
                                    name='e_procedure'
                                    rows='5'
                                    placeholder='Write what you would like to know about e-procedure'
                                />
                                <ErrorMessage name='e_procedure' component='div' className='error-message' />
                            </div>
                        </div>
                        <div className='form-input'>
                            <button type='submit' className='btn btn-danger button_input' disabled={isSubmitting}>
                                SUBMIT YOUR QUERY
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default page;
