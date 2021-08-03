
export const updateData = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // dispatch method dispatches an action to the reducer

        // make async calls to the database

        // gets the collection from the Firestore to add a new doc i.e. professor with their info
        const firestore = getFirestore();
        firestore.collection('professors').add({

        }).then(() => {
            dispatch({ type: 'UPDATE_DATA', project});
        }).catch((err) => {
            dispatch({ type: 'UPDATE_DATA_ERR', err});
        });


    };
};
