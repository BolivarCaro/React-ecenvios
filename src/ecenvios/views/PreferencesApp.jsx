import { Box, Typography, Divider, Button, Switch, FormControlLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export const PreferencesApp = () => {
    const [theme, setTheme] = useState(false); // false = Claro, true = Oscuro
    const [language, setLanguage] = useState("es"); // Idioma por defecto: Español
    const [notifications, setNotifications] = useState(true); // Notificaciones activadas por defecto

    const handleSave = () => {
        console.log({
            theme: theme ? "Oscuro" : "Claro",
            language,
            notifications: notifications ? "Activadas" : "Desactivadas",
        });
        alert("Preferencias guardadas exitosamente.");
    };

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
                Preferencias de la Aplicación
            </Typography>
            <Divider />

            {/* Tema */}
            <Typography variant="h6">Tema de la Aplicación</Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={theme}
                        onChange={(e) => setTheme(e.target.checked)}
                        color="primary"
                    />
                }
                label={theme ? "Modo Oscuro" : "Modo Claro"}
            />

            <Divider />

            {/* Idioma */}
            <Typography variant="h6">Idioma</Typography>
            <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                fullWidth
            >
                <MenuItem value="es">Español</MenuItem>
                <MenuItem value="en">Inglés</MenuItem>
                <MenuItem value="fr">Francés</MenuItem>
                <MenuItem value="de">Alemán</MenuItem>
            </Select>

            <Divider />

            {/* Notificaciones */}
            <Typography variant="h6">Notificaciones</Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                        color="primary"
                    />
                }
                label={notifications ? "Activadas" : "Desactivadas"}
            />

            <Divider />

            <Button
                variant="contained"
                color="success"
                onClick={handleSave}
                sx={{ mt: 2 }}
            >
                Guardar Preferencias
            </Button>
        </Box>
    );
};
