import { Grid, Typography, Box, CardMedia } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: '#FFFFFF', // Fondo blanco
                padding: 4,
                px: { xs: 3, sm: 4 }, // Espaciado responsive
            }}
        >
            <Grid
                item
                xs={12} sm={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <CardMedia
                    component="img"
                    image="/src/assets/images/logo.png" // Ruta de la imagen
                    alt="Logo"
                    sx={{
                        maxWidth: '80%', // Tamaño ajustable
                        maxHeight: 100,  // Tamaño controlado
                        margin: '0 auto', // Centrado horizontal
                        objectFit: 'contain', // Ajustar la imagen sin cortarla ni estirarla
                    }}
                />
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }} color="text.primary">
                    ecenvíos - Entregando el futuro de manera sostenible
                </Typography>
            </Grid>

            <Grid
                item
                xs={12} sm={6}
                className="box-shadow"
                sx={{
                    width: { sm: 450 },
                    backgroundColor: '#FFFFFF', // Fondo blanco
                    padding: 3,
                    borderRadius: 2, // Ajuste de borde
                    boxShadow: '0px 3px 6px rgba(0,0,0,0.16)', // Sombra sutil gris
                    textAlign: 'center'
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }} color="text.primary">
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    );
};
