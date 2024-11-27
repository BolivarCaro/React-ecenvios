import { createSlice } from '@reduxjs/toolkit';

export const destinatarioSlice = createSlice({
    name: 'destinatario',
    initialState: {
        isSaving: false,
        messageSaved: '',
        consignees: [],
        active: null
    },
    reducers: {
        savingNewConsignee: (state) => {
            state.isSaving = true;
        },

        addNewEmptyConsignee: (state, action) => {
            state.consignees.push( action.payload );
            state.isSaving = false;

        },
        setActiveConsignee: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        setConsignee: (state, action) => { 
            state.consignees = action.payload.map(consignee => ({ 
                ...consignee,
                 date: consignee.date && typeof consignee.date.toDate === 'function' 
                 ? consignee.date.toDate().toISOString()
                  : consignee.date }));
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateConsignee: ( state, action ) => {
            state.isSaving = false;
            state.consignees = state.consignees.map( consignee => {

                if ( consignee.id === action.payload.id ) {
                    return action.payload;
                }

                return consignee;

            } );

            state.messageSaved = `${ action.payload.nombres }, Datos ctualizados correctamente`

        },
        /* setPhotosToActiveNote: ( state, action ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        }, */

        /* clearShipmentsLogout: ( state ) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;

        }, */


        deleteConsigneeById: ( state, action ) => {
            state.active = null;
            state.consignees = state.consignees.filter( consignee => consignee.id !== action.payload );
            console.log("Shipment removed from state:", action.payload);
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewConsignee,
    addNewEmptyConsignee,
    setActiveConsignee,
    setConsignee,
    setSaving,
    updateConsignee,
    deleteConsigneeById

 } = destinatarioSlice.actions;