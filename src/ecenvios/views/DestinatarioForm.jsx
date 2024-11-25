import { Box, Button } from "@mui/material"
import { Froms } from "../components/Froms"
import { useNavigate } from "react-router-dom";


export const DestinatarioForm = () => {
    const navigate = useNavigate();
    
    const handleContinue = () => {
        navigate("/DestinatarioForm")
    }
    return (
        <>
            <Froms title="Datos del Destinatario" />
            <Box

                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2
                }}
            >
                <Button variant="contained" color="primary" size="large" onClick={ handleContinue }>
                    Continuar
                </Button>

            </Box>
        </>
    )
}
