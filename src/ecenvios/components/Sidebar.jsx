import React, { useState } from "react";
import { Drawer, IconButton, Box, Typography, Divider, Toolbar, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const Sidebar = ({ drawerWidth = 200 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { shipments } = useSelector(state => state.ecenvios);
    const { consignees } = useSelector(state => state.destinatario);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    position: "fixed",
                    top: "0",
                    left: isOpen ? `${drawerWidth - 65}px` : "0",
                    transform: "translateY(0)",
                    backgroundColor: "#001F3F",
                    color: "#FFFFFF",
                    margin: 2,
                    zIndex: 1301,
                    '&:hover': { backgroundColor: "#2ECC40" },
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                variant="permanent"
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
                        opacity: isOpen ? 1 : 0,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <Typography variant="h6" sx={{ marginRight: 2 }}>Remitente</Typography>
                <List>
                    {shipments.map(shipment => (
                        <SideBarItem key={shipment.id} type="shipment" {...shipment} />
                    ))}
                </List>
                <Typography variant="h6" sx={{ marginRight: 2 }}>Destinatario</Typography>
                <List>
                    {consignees.map(consignee => (
                        <SideBarItem key={consignee.id} type="consignee" {...consignee} />
                    ))}
                </List>
                
                <Divider />
            </Drawer>
        </Box>
    );
};
