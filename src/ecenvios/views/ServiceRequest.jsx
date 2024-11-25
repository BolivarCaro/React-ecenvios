import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const ServiceRequest = () => {
  return (
        <Grid 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{/* { dateString } */}28 de agosto</Typography>
            </Grid>

            <Grid item >


                {/* <input 
                    type="file" 
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
                <IconButton
                    color='primary'
                    disabled = { isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >

                    <UploadOutlined />

                </IconButton> */}

                <Button 
                    /* disabled = { isSaving }
                    onClick={ onSaveNote } */
                    color="primary" 
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    /* name="title"
                    value={ title }
                    onInput={ onInputChange } */

                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió hoy?"
                    minRows={ 5 }
                    /* minRows={ 5 } */
                    /* name="body"
                    value={ body }
                    onInput={ onInputChange } */
                />
            </Grid>

            {/* <Grid container justifyContent="end">
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar

                </Button>
            </Grid> */}

            {/* Image gallery */}
            <ImageGallery /* images = { note.imageUrls } */ />

        </Grid>
  )
}
