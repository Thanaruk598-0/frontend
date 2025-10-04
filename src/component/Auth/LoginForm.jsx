import { Password } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'
import { Field, Formik , Form } from 'formik'
import  { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const initialValues={
    email:"",
    Password:""
}
export const LoginForm = () => {
const navigate = useNavigate()

    const handleSubmit=()=>{

    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>

                <Field
                 as={TextField}
                name="email"
                label="email"
                fullWidth
                variant="outlined"
                 margin="normal"
/>
                  <Field
                 as={TextField}
                name="password"
                label="password"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <Button
                 sx={{
                mt: 2,
                py: "0.8rem",
                backgroundColor: "#ff0066",
                "&:hover": { backgroundColor: "#e6005c" },
              }}
              fullWidth
              type="submit"
              variant="contained"
                >
                    Login</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{mt:3}}>
                Don't have an account?
                <Button  size='small' onClick={()=>navigate("/account/register")}>
                    register
                    </Button>
            </Typography>
        </div>
    )
}