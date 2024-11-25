// ReviewData.js
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export const ReviewData = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { remitenteData, destinatarioData } = location.state;

    const handleConfirm = () => {
        // Aquí podrías manejar el envío de datos o cualquier otra lógica antes de mostrar el número de guía
        navigate("/tracking", { state: { remitenteData, destinatarioData } });
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, mt: 15 }}>
            <Typography variant="h4" textAlign="center" sx={{ mb: 2 }}>
                Confirmar Datos
            </Typography>

            <Typography variant="h6">Datos del Remitente</Typography>
            {Object.entries(remitenteData).map(([key, value]) => (
                <Typography key={key} variant="body1">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                </Typography>
            ))}

            <Typography variant="h6" sx={{ mt: 2 }}>Datos del Destinatario</Typography>
            {Object.entries(destinatarioData).map(([key, value]) => (
                <Typography key={key} variant="body1">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                </Typography>
            ))}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 3
                }}
            >
                <Button variant="contained" color="primary" size="large" onClick={handleConfirm}>
                    Confirmar y Generar Número de Guía
                </Button>
            </Box>
        </Box>
    );
};
