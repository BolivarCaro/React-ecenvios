import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAGPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: 'background.paper', marginTop: "80px" , mt: 15}}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: "#001F3F", fontWeight: 'bold' }}>
        Preguntas Frecuentes
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Accordion sx={{ boxShadow: 3, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ¿Cómo puedo hacer un pedido?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Puedes realizar un pedido a través de nuestra página web. Simplemente selecciona los productos que deseas y
                agrega los detalles de envío para completar tu pedido.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Accordion sx={{ boxShadow: 3, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ¿Qué opciones de pago ofrecen?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Aceptamos pagos con tarjetas de crédito y débito, transferencias bancarias y PayPal. Todos los pagos son
                seguros y protegidos.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Accordion sx={{ boxShadow: 3, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ¿Cómo puedo rastrear mi paquete?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Después de realizar tu pedido, recibirás un correo con un número de seguimiento. Con ese número, podrás rastrear
                el estado de tu paquete en tiempo real.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Accordion sx={{ boxShadow: 3, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                ¿Realizan envíos internacionales?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Sí, ofrecemos envíos internacionales a una variedad de países. Por favor, consulta nuestra página de envío
                para más detalles sobre tarifas y tiempos de entrega.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};
