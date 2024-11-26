import { Box, Button, TextField, Typography } from "@mui/material";

export const DestinatarioForm = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          mt: 15,
        }}
      >
        <Typography fontSize={20} fontWeight="light" textAlign="center">
          Fecha del Envío
        </Typography>

        <Typography variant="h4" textAlign="center" sx={{ mt: 2 }}>
          Datos del Destinatario
        </Typography>

        {[
          { label: "Nombres", name: "nombres" },
          { label: "Apellidos", name: "apellidos" },
          { label: "Documento de Identificación", name: "documento_identificacion" },
          { label: "Celular", name: "celular" },
          { label: "Correo Electrónico", name: "correo_electronico" },
          { label: "Ciudad", name: "ciudad" },
          { label: "Departamento", name: "departamento" },
          { label: "Dirección", name: "direccion" },
        ].map(({ label, name }) => (
          <TextField key={name} label={label} variant="outlined" fullWidth />
        ))}

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 2,
              minWidth: 100,
              bgcolor: "primary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.dark" },
              transition: "transform 0.3s ease",
              "&:active": { transform: "scale(0.95)" },
            }}
          >
            Continuar
          </Button>
        </Box>
      </Box>
    </>
  );
};
