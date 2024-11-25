import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export const WhyUs = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 15, p: 2 }}>
      <Grid container spacing={3}>
        {/* Beneficio 1 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              minHeight: 250, // Altura mínima para centrar verticalmente
              textAlign: "center",
            }}
          >
            <LocalShippingIcon sx={{ fontSize: 60, color: "#007BFF" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Entrega Garantizada
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Realizamos entregas puntuales y seguras, asegurando que tus
              paquetes lleguen a tiempo.
            </Typography>
          </Paper>
        </Grid>
        {/* Beneficio 2 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              minHeight: 250,
              textAlign: "center",
            }}
          >
            <SecurityIcon sx={{ fontSize: 60, color: "#28A745" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Seguridad de Envío
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Garantizamos la protección de tus productos con medidas de
              seguridad avanzadas.
            </Typography>
          </Paper>
        </Grid>
        {/* Beneficio 3 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 3,
              minHeight: 250,
              textAlign: "center",
            }}
          >
            <ThumbUpAltIcon sx={{ fontSize: 60, color: "#FFC107" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Satisfacción del Cliente
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Nuestro objetivo principal es que cada cliente quede satisfecho
              con nuestro servicio.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
