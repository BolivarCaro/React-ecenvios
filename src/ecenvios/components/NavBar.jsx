import { Link as InicioLink } from 'react-router-dom';
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography, Box, Link } from "@mui/material";
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 200 }) => {

    const dispatch = useDispatch();


    const onLogout = () =>{

        dispatch( startLogout() );
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px}` },
            }}
        >
            <Toolbar
                sx={{
                    height: "200px", // Limitar altura del toolbar
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Alineado arriba
                    alignItems: "center",
                }}
            >
                {/* Logo y texto "Ecoamigable" centrados en la parte superior */}
                <Box display="flex" flexDirection="column" alignItems="center" sx={{ mb: 2 }}>
                    <img 
                        src="/images/logo.png" 
                        alt="Logo Ecenvios" 
                        style={{ width: 120, height: 80 }} 
                        
                    />
                    <Typography variant="h6" component="div" sx={{ fontSize: "1rem", fontStyle: "normal", mt: 1 }}>
                        ecenvíos - Entregango el futuro, de manera sostenible
                    </Typography>
                </Box>

                <IconButton 
                    color="error" 
                    onClick={ onLogout }
                    sx={{ 
                        position: "absolute", top: 16, right: 16 
                        }}
                    >
                    <LogoutOutlined />
                </IconButton>

                {/* Menú horizontal */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "space-evenly",
                        width: "100%", // Asegura que los enlaces estén bien distribuidos
                    }}
                >
                    <Link component={InicioLink} underline="hover" color="inherit" to="InicioPage">
                        Inicio
                    </Link>
                    <Link component={InicioLink} underline="hover" color="inherit" to="FAQPage">
                        Preguntas Frecuentes
                    </Link>
                    <Link component={InicioLink} underline="hover" color="inherit" to="/WhyUs">
                        ¿Por qué elegirnos?
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
