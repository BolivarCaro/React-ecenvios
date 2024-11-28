import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const TrackingNumber = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const navigate = useNavigate();

    const generateTrackingNumber = () => {
        const newTrackingNumber = Math.random().toString(36).substring(2, 9).toUpperCase();
        setTrackingNumber(newTrackingNumber);
    };

    const handleFinish = () => {
        navigate("/Finish");
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto", padding: 3, mt: 5 }}>
            <Typography variant="h4" textAlign="center">Número de Seguimiento</Typography>
            <Button variant="contained" color="primary" onClick={generateTrackingNumber} sx={{ mb: 2 }}>
                Generar Número de Seguimiento
            </Button>
            {trackingNumber && (
                <>
                    <Typography variant="h6" textAlign="center">Número de Seguimiento: {trackingNumber}</Typography>
                    <LoadScript googleMapsApiKey="AIzaSyDXJN4F6Zr8cY6F4Y71nQgbjDneYE-d8Mg">
                        <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={{ lat: 4.60971, lng: -74.08175 }} // Ejemplo: Coordenadas de Bogotá, Colombia
                            zoom={10}
                        >
                            <Marker position={{ lat: 4.60971, lng: -74.08175 }} />
                        </GoogleMap>
                    </LoadScript>
                </>
            )}
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleFinish}
                sx={{ mt: 2 }}
            >
                Finalizar
            </Button>
        </Box>
    );
};
