import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('correo@correo.com')
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  password: Yup.string()
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
});

const LoginFormBasic = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
    >
      {({ errors, touched }) => (
        <Form className='w-full border-2 m-5 text-black'>
          <label className='text-black'>CORREO ELECTRÓNICO</label>
          <Field
            name='email'
            placeholder='nombre@ejemplo.com'
            type='email'
            className='borderEnvio rounded-sm px-2 outline-none'
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormBasic;
