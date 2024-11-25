import { Box, Button, TextField, Typography } from '@mui/material';

export const Froms = ({ title  }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 600,
        margin: 'auto',
        padding: 2,
        mt: 15,
      }}
    >
      <Typography variant="h4" textAlign="center">
        { title }
      </Typography>

      <TextField label="Nombres" variant="outlined" fullWidth />
      <TextField label="Apellidos" variant="outlined" fullWidth />
      <TextField label="Documento de Identificación" variant="outlined" fullWidth />
      <TextField label="Celular" variant="outlined" fullWidth />
      <TextField label="Correo Electrónico" variant="outlined" fullWidth />
      <TextField label="Ciudad" variant="outlined" fullWidth />
      <TextField label="Departamento" variant="outlined" fullWidth />
      <TextField label="Dirección" variant="outlined" fullWidth />

      
    </Box>
  );
};
