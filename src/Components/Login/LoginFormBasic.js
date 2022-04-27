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
  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='w-full m-5 text-black flex flex-col'>
          <label className='text-black'>CORREO ELECTRÓNICO</label>
          <Field
            name='email'
            placeholder='nombre@ejemplo.com'
            type='email'
            className='borderEnvio rounded-sm px-2 outline-none'
          />
          {errors.email && touched.email ? (
            <div className='text-red-500'>{errors.email}</div>
          ) : null}
          <label className='text-black'>CONTRASEÑA</label>
          <Field
            name='password'
            placeholder='********'
            type='password'
            className='borderEnvio rounded-sm px-2 outline-none'
          />
          {errors.password && touched.password ? (
            <div className='text-red-500'>{errors.password}</div>
          ) : null}
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm'
          >
            ENVIAR
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormBasic;
