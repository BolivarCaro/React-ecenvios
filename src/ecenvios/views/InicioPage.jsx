import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

export const InicioPage = () => {
    return (
        <Box sx={{  flexGrow: 1, mt: 15 }} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container spacing={2} justifyContent="space-between">
                {/* Primer apartado */}
                <Grid item xs={12} sm={6} >
                    <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit:'cover',
                                height: 200,
                                width: '100%'
                            }}
                            image="/src/assets/images/cajacarton.jpg"
                            alt="cajas con material reciclado" 
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Bienvenido a nuestra empresa ecológica de envíos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nos enorgullece ofrecer soluciones de envío sostenibles con nuestras cajas hechas de materiales reciclados y reciclables.
                                Cada caja viene con un código QR impreso que, al escanearlo, te lleva directamente a nuestra página web.
                                Aquí puedes rastrear tu paquete, obtener más información sobre nuestros servicios y realizar otras interacciones digitales.
                                Nuestro compromiso es hacer que el envío sea fácil, conveniente y respetuoso con el medio ambiente.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Segundo apartado */}
                <Grid item xs={12} sm={6} >
                    <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'cover', // Hace que la imagen se recorte si es necesario, manteniendo la proporción
                                height: 200, // Mantiene la altura de la imagen
                                width: '100%' // La imagen ocupará el 100% del ancho de la CardMedia
                              }}
                            image="/src/assets/images/camion.jpg"
                            alt="Camiones equipados con gps"
                         />
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Camiones equipados con GPS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nuestros camiones están equipados con GPS, lo que nos permite rastrear y actualizar la ubicación de tus paquetes en tiempo real.
                                Nuestro compromiso es proporcionar un servicio de envío eficiente y transparente.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tercer apartado */}
                <Grid item xs={12} sm={6} >
                    <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'cover',
                                height: 200,
                                width: '100%'
                            }}
                            image="/src/assets/images/teamwork.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Nuestro equipo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cada miembro de nuestro equipo juega un papel crucial en asegurar que tus paquetes lleguen a tiempo y en perfectas condiciones.
                                Estamos orgullosos de nuestro personal, quienes trabajan incansablemente para proporcionar el mejor servicio posible.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Cuarto apartado */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
                        <CardMedia 
                            component="img"
                            sx={{
                                objectFit: 'cover',
                                height: 200,
                                width: '100%'
                            }}
                            image="/src/assets/images/customerhappy.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Nuestros clientes satisfechos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Aquí puedes ver a algunos de nuestros clientes satisfechos con sus entregas. Su sonrisa es nuestra mayor recompensa y nos motiva a seguir trabajando duro para ofrecer el mejor servicio de envío posible.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

