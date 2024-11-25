import { createSlice } from '@reduxjs/toolkit';

export const ecenviosSlice = createSlice({
    name: 'ecenvios',
    initialState: {
        isSaving: false,
        messageSaved: '',
        shipments: [],
        active: null
    },
    reducers: {
        savingNewShipment: (state) => {
            state.isSaving = true;
        },

        addNewEmptyShipment: (state, action) => {
            state.shipments.push( action.payload );
            state.isSaving = false;

        },
        setActiveShipment: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        setShipments: (state, action) => { 
            state.shipments = action.payload.map(shipment => ({ 
                ...shipment,
                 date: shipment.date && typeof shipment.date.toDate === 'function' 
                 ? shipment.date.toDate().toISOString()
                  : shipment.date }));
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateShipment: ( state, action ) => {
            state.isSaving = false;
            state.shipments = state.shipments.map( shipment => {

                if ( shipment.id === action.payload.id ) {
                    return action.payload;
                }

                return shipment;

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


        deleteShipmentById: ( state, action ) => {
            state.active = null;
            state.shipments = state.shipments.filter( shipment => shipment.id !== action.payload );
            console.log("Shipment removed from state:", action.payload);
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyShipment,
    setActiveShipment,
    setShipments,
    setSaving,
    updateShipment,
    deleteShipmentById,
    savingNewShipment,
    setPhotosToActiveNote,
    clearShipmentsLogout,
 } = ecenviosSlice.actions;