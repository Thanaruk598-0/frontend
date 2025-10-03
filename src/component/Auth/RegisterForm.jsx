import React from 'react';
import { Button, Typography, TextField } from '@mui/material';
import { Field, Formik, Form  } from 'formik';
import { useNavigate } from 'react-router-dom';
import {FormControl,  InputLabel,  Select,MenuItem,} from "@mui/material";



  const initialValues = {
    fullName:'',
    email: '',
    password: '',
    role:"ROLE_CUSTOMER"
  }

  export default function RegisterForm(){
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Form values:', values);
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
            label="full name"
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

          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
  as={Select}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

          <Button
            sx={{ mt: 2, padding: '1rem' }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        if have an already account?{' '}
        <Button size="small" onClick={() => navigate('/account/login')}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

