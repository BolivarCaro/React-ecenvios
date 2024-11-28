import React from "react";
import { Box, Button, Typography, Divider, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveShipment } from "../../store/ecenvios/ecenviosSlice";
import { setActiveConsignee } from "../../store/ecenvios/destinatario/remitenteSlice";
import { useForm } from "../../hooks/useForm";

export const ReviewData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { active: shipment } = useSelector(state => state.ecenvios);
    const { active: consignee } = useSelector(state => state.destinatario);

    const {
        apellidos,
        nombres,
        documento_identificacion,
        celular,
        correo_electronico,
        ciudad,
        departamento,
        direccion,
        onInputChange,
        formState: shipmentForm
    } = useForm(shipment);

    const {
        apellidos: consigneeApellidos,
        nombres: consigneeNombres,
        documento_identificacion: consigneeDocumentoIdentificacion,
        celular: consigneeCelular,
        correo_electronico: consigneeCorreoElectronico,
        ciudad: consigneeCiudad,
        departamento: consigneeDepartamento,
        direccion: consigneeDireccion,
        onInputChange: onConsigneeInputChange,
        formState: consigneeForm
    } = useForm(consignee);

    const handleContinue = () => {
        dispatch(setActiveShipment(shipmentForm));
        dispatch(setActiveConsignee(consigneeForm));
        navigate("/TrackingNumber");
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto", padding: 3, mt: 5 }}>
            <Typography variant="h4" textAlign="center">Verificación de Datos</Typography>
            <Divider />

            <Typography variant="h6">Datos del Remitente</Typography>
            {[
                { label: "Nombres", value: nombres, name: "nombres" },
                { label: "Apellidos", value: apellidos, name: "apellidos" },
                { label: "Documento de Identificación", value: documento_identificacion, name: "documento_identificacion" },
                { label: "Celular", value: celular, name: "celular" },
                { label: "Correo Electrónico", value: correo_electronico, name: "correo_electronico" },
                { label: "Ciudad", value: ciudad, name: "ciudad" },
                { label: "Departamento", value: departamento, name: "departamento" },
                { label: "Dirección", value: direccion, name: "direccion" },
            ].map(({ label, value, name }) => (
                <TextField
                    key={name}
                    label={label}
                    variant="outlined"
                    fullWidth
                    name={name}
                    value={value}
                    onChange={onInputChange}
                    sx={{ mb: 2 }}
                />
            ))}

            <Typography variant="h6">Datos del Destinatario</Typography>
            {[
                { label: "Nombres", value: consigneeNombres, name: "nombres" },
                { label: "Apellidos", value: consigneeApellidos, name: "apellidos" },
                { label: "Documento de Identificación", value: consigneeDocumentoIdentificacion, name: "documento_identificacion" },
                { label: "Celular", value: consigneeCelular, name: "celular" },
                { label: "Correo Electrónico", value: consigneeCorreoElectronico, name: "correo_electronico" },
                { label: "Ciudad", value: consigneeCiudad, name: "ciudad" },
                { label: "Departamento", value: consigneeDepartamento, name: "departamento" },
                { label: "Dirección", value: consigneeDireccion, name: "direccion" },
            ].map(({ label, value, name }) => (
                <TextField
                    key={name}
                    label={label}
                    variant="outlined"
                    fullWidth
                    name={name}
                    value={value}
                    onChange={onConsigneeInputChange}
                    sx={{ mb: 2 }}
                />
            ))}

            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleContinue}
                sx={{ mt: 2 }}
            >
                Continuar
            </Button>
        </Box>
    );
};
