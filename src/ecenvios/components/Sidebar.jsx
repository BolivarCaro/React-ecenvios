import React, { useState } from "react";
import { Drawer, IconButton, Box, Typography, Button, Divider, Toolbar, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const Sidebar = ({ drawerWidth = 200 }) => {

    const { displayName } = useSelector( state => state.auth );
    const { shipments } = useSelector( state => state.ecenvios );

    const [isOpen, setIsOpen] = useState(false);


    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ display: "flex" }}>
            {/* Botón de alternar (fijo al borde izquierdo) */}
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    position: "fixed",
                    top: "0", // Cambiar posición vertical cuando está abierto
                    left: isOpen ? `${drawerWidth - 65}px` : "0", // Dentro del ancho del drawer
                    transform:  "translateY(0)" , // Mantener centrado cuando está cerrado
                    backgroundColor: "#001F3F",
                    color: "#FFFFFF",
                    margin: 2,
                    zIndex: 1301, // Sobre el Drawer
                    '&:hover': { backgroundColor: "#2ECC40" },
                }}
            >
                <MenuIcon />
            </IconButton>


            {/* Sidebar */}
            <Drawer
                variant="permanent" // Sidebar fijo
                open={isOpen}
                sx={{
                    width: isOpen ? drawerWidth : 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        backgroundColor: "#FFFFFF",
                        color: "#001F3F",
                        borderRight: "1px solid #E0E0E0",
                        transition: "width 0.3s ease-in-out, opacity 0.3s ease-in-out",
                        opacity: isOpen ? 1 : 0, // Transición suave con opacidad
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        shipments.map( shipment =>(
                            <SideBarItem key={ shipment.id } { ...shipment } />
                        ))
                    }
                </List>
                    
            </Drawer>
        </Box>
    );
};
