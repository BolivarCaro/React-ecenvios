import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { addNewEmptyConsignee, deleteConsigneeById, savingNewConsignee, setActiveConsignee, setConsignee, setSaving, updateConsignee } from "./remitenteSlice";
import { loadConsignees } from "../../../helpers/destinatario/loadconsignees";
import { FirebaseDB } from "../../../firebase";


export const startNewConsignee = () => {
    return async( dispatch, getState ) => {

        /* console.log(getState()); */
        const { uid } =  getState().auth;
        //dispatch
        dispatch( savingNewConsignee() );


        //grabar en firebase uid
        const newConsignee = {
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

        const newDoc = doc( collection( FirebaseDB, `${ uid }/ecenvios/consignees` ) );
        await setDoc( newDoc, newConsignee );
        //console.log({newDoc, setDoc});
        newConsignee.id = newDoc.id;


        // dispatch
        dispatch( addNewEmptyConsignee( newConsignee ) );
        dispatch( setActiveConsignee( newConsignee ) );
        
        
    }
}

export const startLoadingConsignee = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const consignees = await loadConsignees( uid );
        dispatch( setConsignee( consignees ) );
    }
}

export const startSaveConsignees = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:consignee } = getState().destinatario;
 
        const consigneeToFireStore= { ...consignee };
        delete consigneeToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${ uid }/ecenvios/consignees/${ consignee.id }` );
        await setDoc( docRef, consigneeToFireStore, { merge: true } );

        dispatch( updateConsignee( consignee ) );

    }
}

export const startDeletingConsignee = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active:consignee } = getState().destinatario;

        console.log("UID:", uid);
        console.log("Consignee:", consignee);

        const docRef = doc( FirebaseDB, `${ uid }/ecenvios/consignees/${ consignee.id }` );
        await deleteDoc( docRef );
        dispatch( deleteConsigneeById( consignee.id ) )

    }
}