import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    //console.log({ email, password })

    //No es la accion a despachar
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            display={ !!errorMessage ? '' : 'none' }
            sx={ { mt: 1 }}
          >
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                /* disabled= { isAuthenticating } */
                variant="contained"
                fullWidth
                sx={{ fontWeight: 'bold', py: 1 }}
                type="submit"
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                /* disabled= { isAuthenticating } */
                variant="contained"
                fullWidth
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 1,
                  backgroundColor: '#4285F4',
                  '&:hover': {
                    backgroundColor: '#357AE8',
                  },
                }}
                onClick={onGoogleSignIn}
              >
                <Google sx={{ color: '#fff' }} />
                <Typography sx={{ ml: 1, color: '#fff', fontWeight: 'bold' }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Enlace para crear una cuenta */}
          <Grid container direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to="/auth/register" sx={{ fontWeight: 'bold' }}>
              ¿No tienes cuenta? Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
