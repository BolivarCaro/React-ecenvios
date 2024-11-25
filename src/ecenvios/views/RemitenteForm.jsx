import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startNewshipment, startSaveShipment } from "../../store/ecenvios/thunks";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { setActiveShipment } from "../../store/ecenvios/ecenviosSlice";
import { SaveOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const RemitenteForm = () => {
    const dispatch = useDispatch();
    const { isSaving, active: shipment, messageSaved } = useSelector(state => state.ecenvios);

    // Aseguramos que shipment tenga un valor inicial válido sin el campo date
    const initialFormState = shipment || {
        apellidos: '',
        nombres: '',
        documento_identificacion: '',
        celular: '',
        correo_electronico: '',
        ciudad: '',
        departamento: '',
        direccion: ''
    };

    const {
        apellidos,
        nombres,
        documento_identificacion,
        celular,
        correo_electronico,
        ciudad,
        departamento,
        direccion,
        onInputChange,
        formState
    } = useForm(initialFormState);

    const navigate = useNavigate();

    const handleContinue = () => {
        dispatch(startNewshipment(formState));
        navigate("/DestinatarioForm");
    };

    useEffect(() => {
      if ( messageSaved.length > 0 ){
        Swal.fire('Datos de Remitente Actualizados', messageSaved, 'success')
      }
    }, [messageSaved])
    

    useEffect(() => {
        dispatch(setActiveShipment(formState));
    }, [formState, dispatch]);

    const onSaveShipment = () => {
        dispatch(startSaveShipment());
    }

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
            <Button
                disabled={isSaving}
                onClick={onSaveShipment}
                color="primary"
                sx={{ padding: 2 }}
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
            <Typography variant="h4" textAlign="center">
                Datos del Remitente
            </Typography>

            <TextField
                label="Nombres"
                variant="outlined"
                fullWidth
                name="nombres"
                value={nombres}
                onChange={onInputChange}
            />
            <TextField
                label="Apellidos"
                variant="outlined"
                fullWidth
                name="apellidos"
                value={apellidos}
                onChange={onInputChange}
            />
            <TextField
                label="Documento de Identificación"
                variant="outlined"
                fullWidth
                name="documento_identificacion"
                value={documento_identificacion}
                onChange={onInputChange}
            />
            <TextField
                label="Celular"
                variant="outlined"
                fullWidth
                name="celular"
                value={celular}
                onChange={onInputChange}
            />
            <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                name="correo_electronico"
                value={correo_electronico}
                onChange={onInputChange}
            />
            <TextField
                label="Ciudad"
                variant="outlined"
                fullWidth
                name="ciudad"
                value={ciudad}
                onChange={onInputChange}
            />
            <TextField
                label="Departamento"
                variant="outlined"
                fullWidth
                name="departamento"
                value={departamento}
                onChange={onInputChange}
            />
            <TextField
                label="Dirección"
                variant="outlined"
                fullWidth
                name="direccion"
                value={direccion}
                onChange={onInputChange}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleContinue}
            >
                Continuar
            </Button>
        </Box>
    );
};
