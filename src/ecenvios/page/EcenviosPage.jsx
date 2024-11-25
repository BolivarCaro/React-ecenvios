import { AddOutlined, PersonOutline, SettingsOutlined } from '@mui/icons-material';
import { EcenviosLayout } from '../layout/EcenviosLayout';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startNewshipment } from '../../store/ecenvios/thunks';

export const EcenviosPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const onClickNewShipment = () => {
      dispatch(startNewshipment());
      navigate('/RemitenteForm')
    }


  return (
    <EcenviosLayout>
      <Outlet />

      {/* Contenedor para los botones flotantes */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 20, // Separación del borde derecho
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centrado vertical
          alignItems: 'center',
          gap: 3,
        }}
      >
        {/* Botón Solicitar Servicio */}
        <Tooltip title="Solicitar Servicio" arrow placement="left">
          <IconButton
            onClick={ onClickNewShipment }
            size="medium"
            sx={{
              color: 'white',
              backgroundColor: 'secondary.main',
              '&:hover': { backgroundColor: 'primary.main' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <AddOutlined sx={{ fontSize: 25 }} />
            <Typography
              variant="caption"
              sx={{ color: 'white', display: 'none' }}
              className="icon-text"
            >
              Solicitar
            </Typography>
          </IconButton>
        </Tooltip>

        {/* Botón Configuración */}
        <Tooltip title="Configuración" arrow placement="left">
          <IconButton
            size="medium"
            sx={{
              color: 'white',
              backgroundColor: 'secondary.main',
              '&:hover': { backgroundColor: 'primary.main' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <SettingsOutlined sx={{ fontSize: 25 }} />
            <Typography
              variant="caption"
              sx={{ color: 'white', display: 'none' }}
              className="icon-text"
            >
              Configuración
            </Typography>
          </IconButton>
        </Tooltip>

        {/* Botón Perfil */}
        <Tooltip title="Perfil" arrow placement="left">
          <IconButton
            size="medium"
            sx={{
              color: 'white',
              backgroundColor: 'secondary.main',
              '&:hover': { backgroundColor: 'primary.main' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
            <PersonOutline sx={{ fontSize: 25 }} />
            <Typography
              variant="caption"
              sx={{ color: 'white', display: 'none' }}
              className="icon-text"
            >
              Perfil
            </Typography>
          </IconButton>
        </Tooltip>
      </Box>
    </EcenviosLayout>
  );
};
