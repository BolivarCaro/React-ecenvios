import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [
    (value) => value.includes('@'), 
    'El correo debe tener una @',
    (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value), 
    'El formato del correo no es válido'
  ],
  password: [
    (value) => value.length >= 8, 
    'El password debe tener al menos 8 caracteres',
    (value) => /[A-Za-z]/.test(value), 
    'El password debe contener al menos una letra',
    (value) => /[0-9]/.test(value), 
    'El password debe contener al menos un número'
  ],
  displayName: [
    (value) => value.length >= 1, 
    'El nombre es obligatorio',
    (value) => /^[a-zA-Z\s]+$/.test(value), 
    'El nombre solo debe contener letras y espacios'
  ]
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations );

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    
    dispatch( startCreatingUserWithEmailPassword( formState ) )
      
      
  }

  return (

    <AuthLayout title='Crear cuenta'>

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>

        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Nombre" 
              type="text" 
              placeholder="Tu Nombre" 
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
               />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Correo" 
              type="email"
              placeholder="example@gmail.com" 
              fullWidth 
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="contraseña" 
              fullWidth 
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >

          <Grid 
             item 
             xs={12}
             display={ !!errorMessage ? '' : 'none' }
             >

              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 } >
              <Button 
                /* disabled= { isCheckingAuthentication } */
                type='submit'
                variant="contained" 
                fullWidth >
                Crear cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>

      </form>

    </AuthLayout>



  )
}
