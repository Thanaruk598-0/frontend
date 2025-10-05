import React from 'react';
import { Button, Typography, TextField, Select, MenuItem } from '@mui/material';
import { Field, Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUser } from '../State/Authentication/Action';
const initialValues = {
  fullName: '',
  email: '',
  password: '',
  role: 'ROLE_CUSTOMER'
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log('form values:', values);
    dispatch(registerUser({ useData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={Select}
            fullWidth
            margin="normal"
            name="role"
            labelId="role-simple-select-label"
          >
            <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
            <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
          </Field>

          <Button
            sx={{
              mt: 2, padding: '1rem',
              backgroundColor: "#ff0066",
              "&:hover": { backgroundColor: "#e6005c" },
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?{' '}
        <Button size="small" onClick={() => navigate('/account/login')}>
          Login
        </Button>
      </Typography>
    </div>
  );
}
