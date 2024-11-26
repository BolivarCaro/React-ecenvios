import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import { useState } from "react";

export const Profile = () => {
    const [profile, setProfile] = useState({
        nombres: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    /* const handleInputChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        if (profile.password !== profile.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("Perfil actualizado:", profile);
        alert("Perfil actualizado correctamente.");
    }; */

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 600,
                margin: "auto",
                padding: 3,
                gap: 2,
                mt: 15,
            }}
        >
            <Typography variant="h4" textAlign="center">
                Mi Perfil
            </Typography>
            <Divider />

            {/* Nombre Completo */}
            <Typography variant="h6">Nombre Completo</Typography>
            <TextField
                label="Nombre Completo"
                variant="outlined"
                fullWidth
                name="nombres"
                /* value={nombres}
                onChange={handleInputChange} */
            />

            {/* Correo Electrónico */}
            <Typography variant="h6">Correo Electrónico</Typography>
            <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                name="email"
                /* value={profile.email}
                onChange={handleInputChange} */
            />


            <Divider />

            {/* Contraseña */}
            <Typography variant="h6">Actualizar Contraseña</Typography>
            <TextField
                label="Nueva Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                /* value={profile.password}
                onChange={handleInputChange} */
            />
            <TextField
                label="Confirmar Nueva Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                /* value={profile.confirmPassword}
                onChange={handleInputChange} */
            />

            <Divider />

            {/* Botón Guardar */}
            <Button
                variant="contained"
                color="primary"
                size="large"
                /* onClick={handleSave} */
                sx={{ mt: 2 }}
            >
                Guardar Cambios
            </Button>
        </Box>
    );
};
