import { UploadFileOutlined } from "@mui/icons-material";
import { Box, Typography, TextField, Button, Divider, CardMedia, Input, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUploadingFiles } from "../../store/ecenvios/thunks";

export const Profile = () => {

    const dispatch = useDispatch();

    const fileInputRef = useRef();

    const { profileImage, isSaving } = useSelector( state => state.ecenvios );
    const { displayName } = useSelector(state => state.auth);

    const [profile, setProfile] = useState({
        nombres: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    

     const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        console.log('subiendo archivos')
        dispatch( startUploadingFiles( target.files ) )
        
    };

   

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 600,
                margin: "auto",
                padding: 3,
                gap: 2,
                mt: 15,
            }}
        >
            <Typography variant="h4" textAlign="center">
                {displayName}
            </Typography>
            <Typography variant="h6" textAlign="center">
                Foto de Perfil
                
                <Box

                    sx={{ 
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,

                     }}
                >
                    <input
                        type="file"
                        onChange={ onFileInputChange }
                        ref={ fileInputRef }
                        style={{ display: 'none' }}
                    
                    />
                    <IconButton
                        color="primary"
                        disabled={ isSaving }
                        onClick={ () => fileInputRef.current.click() }
                    >
                        <UploadFileOutlined />
                    </IconButton>
                    {profileImage && (<CardMedia 
                        component="img" 
                        sx={{ 
                            objectFit: 'cover', height: 200, width: 200, borderRadius: '50%'
                         }} 
                         image={profileImage} alt="Foto de perfil"
                         />
                         
                        )}
                </Box>
            </Typography>
            <Divider />

            {/* Nombre Completo */}
            <Typography variant="h6">Nombre Completo</Typography>
            <TextField
                label="Nombre Completo"
                variant="outlined"
                fullWidth
                name="nombres"
                /* value={nombres}
                onChange={handleInputChange} */
            />

            {/* Correo Electrónico */}
            <Typography variant="h6">Correo Electrónico</Typography>
            <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                name="email"
                /* value={profile.email}
                onChange={handleInputChange} */
            />


            <Divider />

            {/* Contraseña */}
            <Typography variant="h6">Actualizar Contraseña</Typography>
            <TextField
                label="Nueva Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                /* value={profile.password}
                onChange={handleInputChange} */
            />
            <TextField
                label="Confirmar Nueva Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                /* value={profile.confirmPassword}
                onChange={handleInputChange} */
            />

            <Divider />

            {/* Botón Guardar */}
            <Button
                variant="contained"
                color="primary"
                size="large"
                /* onClick={handleSave} */
                sx={{ mt: 2 }}
            >
                Guardar Cambios
            </Button>
        </Box>
    );
};
