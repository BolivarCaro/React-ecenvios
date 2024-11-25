import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyShipment, savingNewShipment, setActiveShipment, setSaving, setShipments, updateShipment } from './ecenviosSlice';
import { loadShipments } from '../../helpers/loadShipments';


export const startNewshipment = () => {
    return async( dispatch, getState ) => {

        /* console.log(getState()); */
        const { uid } =  getState().auth;
        //dispatch
        dispatch( savingNewShipment() );


        //grabar en firebase uid
        const newShipment = {
            nombres: '',        
            apellidos: '',  
            documento_identificacion: '',
            celular: '',
            correo_electronico: '',
            ciudad: '',
            departamento: '',
            direccion: '', 
            date: new Date().getTime(),

        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/ecenvios/shipments` ) );
        await setDoc( newDoc, newShipment );
        //console.log({newDoc, setDocResp});
        newShipment.id = newDoc.id;


        // dispatch
        dispatch( addNewEmptyShipment( newShipment ) );
        dispatch( setActiveShipment( newShipment ) );
        //dispatch ( newNote )
        //dispatch( activarNote )
        
    }
}

export const startLoadingShipment = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const shipments = await loadShipments( uid );
        dispatch( setShipments( shipments ) );
    }
}

export const startSaveShipment = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:shipment } = getState().ecenvios;
 
        const shipmentToFireStore= { ...shipment };
        delete shipmentToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${ uid }/ecenvios/shipments/${ shipment.id }` );
        await setDoc( docRef, shipmentToFireStore, { merge: true } );

        dispatch( updateShipment( shipment ) );

    }
}

/* export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );

        //await fileUpload( files[0] );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
            
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
} */
/* export const startDeletingNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( FirebaseDb, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef );
        dispatch( deleteNoteById( note.id ) )

    }
} */