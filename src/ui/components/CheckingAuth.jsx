import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
    return (

        <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: '#backgroung.paper', // Fondo blanco
                padding: 4,
                px: { xs: 3, sm: 4 }, // Espaciado responsive
            }}
        >
            <Grid
                container
                direction='row'
                justifyContent='center'
            >
                <CircularProgress color="warning" />
                
            </Grid>
        </Grid>
    );
};

  