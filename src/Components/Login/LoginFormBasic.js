import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginAsync } from '../../Redux/Actions/actionLogin';

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
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(loginAsync(email, password));
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
        <Form className='w-full m-5 text-black flex flex-col   px-4  lg:px-16 '>
          <label className='text-black mb-2'>CORREO ELECTRÓNICO</label>
          <Field
            name='email'
            placeholder='nombre@ejemplo.com'
            type='email'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-gray-100 '
          />
          {errors.email && touched.email ? (
            <div className='text-red-500'>{errors.email}</div>
          ) : null}
          <label className='text-black mb-2'>CONTRASEÑA</label>
          <Field
            name='password'
            placeholder='********'
            type='password'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-gray-100'
          />
          {errors.password && touched.password ? (
            <div className='text-red-500'>{errors.password}</div>
          ) : null}
          <button
            type='submit'
            className='  bg-green-600  hover:bg-green-800  text-white font-bold py-2 px-4 rounded-2xl'
          >
            ENVIAR
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormBasic;
