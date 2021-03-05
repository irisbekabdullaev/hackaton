import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import './Register.module.css'
import TextError from './TextError'
import * as Yup from "yup"
import classes from './Register.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import NavbarProducts from '../Navbar/NavbarProducts';
// import { authContext } from '../../../contexts/AuthContext';



const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const RegisterForm = () => {

  const { registerUser } = useContext(authContext)
  const history = useHistory();

  const onSubmit = (values, actions) => {
    const { email, password } = values;
    let obj = {
      email,
      password,
    }
    registerUser(obj);
    actions.resetForm();

    if (!obj.length) {
        // toast.dark(Вы вошли в систему как ${email}!)
        history.push("/")
    }
  }

  return (
    <div>
      <ToastContainer />
      <NavbarProducts />
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: ""
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={classes.form} style={{backgroundColor:'white'}}>

            <h1 style={{color:'blue'}}>
              Register
          </h1>
            <div style={{ marginBottom: 30 }}>
              <Field
                type="email"
                name="email"
                fullWidth={true}
                variant="outlined"
                placeholder="Email"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="email" />
            </div>
            <div
              style={{ marginBottom: 30 }}
            >
              <Field
                type="password"
                name="password"
                fullWidth={true}
                variant="outlined"
                placeholder="Password"
                as={TextField}
              />

              <ErrorMessage component={TextError} name="password" />
            </div>
            <div
              style={{ marginBottom: 30 }}
            >
              <Field
                type="password"
                name="passwordConfirm"
                fullWidth={true}
                variant="outlined"
                placeholder="Password confirm"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="passwordConfirm" />
            </div>
              <Button type="submit" color="primary" variant="contained">
                Register
              </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;