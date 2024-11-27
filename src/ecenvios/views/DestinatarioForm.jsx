import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setActiveConsignee } from "../../store/ecenvios/destinatario/remitenteSlice";
import { startDeletingConsignee, startSaveConsignees } from "../../store/ecenvios/destinatario/thunks";
import { DeleteOutline, SaveOutlined } from "@mui/icons-material";

export const DestinatarioForm = () => {
  const [showDialog, setShowDialog] = useState(true);   
  const [isSaved, setIsSaved] = useState(false);
  

  const dispatch = useDispatch();
  const { isSaving, active: consignee, messageSaved } = useSelector((state) => state.destinatario);

  const {
    apellidos = '',
    nombres = '',
    documento_identificacion = '',
    celular = '',
    correo_electronico = '',
    ciudad = '',
    departamento = '',
    direccion = '',
    onInputChange,
    formState,
    date,
  } = useForm({
    ...consignee,
    apellidos: consignee?.apellidos || '',
    nombres: consignee?.nombres || '',
    documento_identificacion: consignee?.documento_identificacion || '',
    celular: consignee?.celular || '',
    correo_electronico: consignee?.correo_electronico || '',
    ciudad: consignee?.ciudad || '',
    departamento: consignee?.departamento || '',
    direccion: consignee?.direccion || '',
  });

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ReviewData");
  };

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Datos de Destinatario Actualizados", messageSaved, "success");
      setIsSaved(true);
    }
  }, [messageSaved]);

  useEffect(() => {
    dispatch(setActiveConsignee(formState));
  }, [formState, dispatch]);

  const onSaveConsignee = () => {
    dispatch(startSaveConsignees());
    setIsSaved(true);
  };

  const onDelete = () => {
    dispatch(startDeletingConsignee());
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <Box
      
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 600,
        margin: "auto",
        padding: 2,
        position: "relative",
        
      }}
    >
      {/* Mensaje Inicial con Animación */}
      <Dialog open={showDialog} onClose={closeDialog}>
        <DialogContent
          sx={{
            textAlign: "center",
            bgcolor: "background.paper",
            color: "#fff",
          }}
        >
          <Typography variant="h6" color="primary.main">
            Ingresa los datos del remitente correctamente y da click en  boton de guardar antes de continuar
          </Typography>
          <Button variant="contained" color="secondary" onClick={closeDialog} sx={{ mt: 2 }}>
            Entendido
          </Button>
        </DialogContent>
      </Dialog>

      <Typography fontSize={20} fontWeight="light" textAlign="center">
        {dateString}
      </Typography>

      <Box display="flex" justifyContent="space-between">
        <Button
          disabled={isSaving}
          onClick={onSaveConsignee}
          sx={{
            minWidth: 100,
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.dark" },
            transition: "transform 0.3s ease",
            "&:active": { transform: "scale(0.95)" },
          }}
          startIcon={<SaveOutlined />}
        >
          Guardar
        </Button>
        <Button
          onClick={onDelete}
          sx={{
            minWidth: 100,
            bgcolor: "error.main",
            color: "#fff",
            "&:hover": { bgcolor: "error.dark" },
            transition: "transform 0.3s ease",
            "&:active": { transform: "scale(0.95)" },
          }}
          startIcon={<DeleteOutline />}
        >
          Borrar
        </Button>
      </Box>

      <Typography variant="h4" textAlign="center" sx={{ mt: 2 }}>
        Datos del Destinatario
      </Typography>

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
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleContinue}
        disabled={!isSaved}
        sx={{
          mt: 2,
          bgcolor: isSaved ? "primary.main" : "grey.200",
          "&:hover": { bgcolor: isSaved ? "primary.main" : "grey.500" },
        }}
      >
        Continuar
      </Button>
    </Box>
  );
};
