import { createTheme } from "@mui/material";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#001F3F',  // Azul oscuro para botones y acciones primarias
        },
        secondary: {
            main: '#2ECC40',  // Verde para botones secundarios y detalles
        },
        error: {
            main: '#FF4136',  // Rojo para mensajes de error o alertas
        },
        background: { 
            default: '#FAFAFA',  // Blanco muy suave y brillante para el fondo principal
            paper: '#FFFFFF',  // Fondo blanco puro para el sidebar y paneles
        },
        text: {
            primary: '#001F3F',  // Texto principal en azul oscuro
            secondary: '#7A7A7A',  // Texto secundario en gris medio
        },
        action: {
            active: '#001F3F',  // Acciones activas en azul oscuro
            hover: 'rgba(0, 31, 63, 0.08)',  // Hover sutil en azul claro
            disabled: 'rgba(0, 0, 0, 0.38)',  // Deshabilitado en gris claro
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Sin mayúsculas automáticas
                    padding: '10px 20px',
                    borderRadius: '8px',  // Bordes redondeados para un diseño moderno
                },
                containedPrimary: {
                    backgroundColor: '#001F3F',  // Azul oscuro
                    color: '#FFFFFF',
                    opacity: 0.9,
                    '&:hover': {
                        backgroundColor: '#001F3F',
                        opacity: 1,  // Resalta con opacidad completa en hover
                    },
                },
                containedSecondary: {
                    backgroundColor: '#2ECC40',  // Verde
                    color: '#FFFFFF',
                    opacity: 0.9,
                    '&:hover': {
                        backgroundColor: '#2ECC40',
                        opacity: 1,  // Resalta con opacidad completa en hover
                    },
                },
                outlinedPrimary: {
                    borderColor: '#001F3F',
                    color: '#001F3F',
                    opacity: 0.8,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 31, 63, 0.1)', // Fondo azul claro en hover
                        opacity: 1,
                    },
                },
                outlinedSecondary: {
                    borderColor: '#2ECC40',
                    color: '#2ECC40',
                    opacity: 0.8,
                    '&:hover': {
                        backgroundColor: 'rgba(46, 204, 64, 0.1)', // Fondo verde claro en hover
                        opacity: 1,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF', // Fondo blanco puro del navbar
                    color: '#001F3F',  // Texto en azul oscuro
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#FFFFFF', // Fondo blanco puro del sidebar
                    color: '#001F3F',  // Texto en azul oscuro
                    borderRight: '1px solid #E0E0E0',  // Línea divisoria sutil
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                body1: {
                    color: '#001F3F', // Texto principal
                    fontWeight: 400,
                },
                body2: {
                    color: '#7A7A7A', // Texto secundario
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF', // Fondo blanco
                    borderRadius: '12px',  // Bordes más redondeados
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)', // Sombra suave
                },
            },
        },
    },
});

