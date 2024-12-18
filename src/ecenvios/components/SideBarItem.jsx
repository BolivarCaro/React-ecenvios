import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveShipment } from "../../store/ecenvios/ecenviosSlice";
import { setActiveConsignee } from "../../store/ecenvios/destinatario/remitenteSlice";

export const SideBarItem = ({
    type,
    apellidos,
    nombres,
    documento_identificacion,
    celular,
    correo_electronico,
    ciudad,
    departamento,
    direccion,
    date,
}) => {
    const dispatch = useDispatch();

    const handleItemClick = () => {
        if (type === "shipment") {
            dispatch(setActiveShipment({
                apellidos,
                nombres,
                documento_identificacion,
                celular,
                correo_electronico,
                ciudad,
                departamento,
                direccion,
                date,
            }));
        } else if (type === "consignee") {
            dispatch(setActiveConsignee({
                apellidos,
                nombres,
                documento_identificacion,
                celular,
                correo_electronico,
                ciudad,
                departamento,
                direccion,
                date,
            }));
        }
    };

    const newNombres = useMemo(() => {
        return nombres.length > 17
            ? nombres.substring(0, 17) + "..."
            : nombres;
    }, [nombres]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleItemClick}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newNombres} />
                    <ListItemText secondary={apellidos} />
                    <ListItemText secondary={documento_identificacion} />
                    <ListItemText secondary={celular} />
                    <ListItemText secondary={correo_electronico} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
