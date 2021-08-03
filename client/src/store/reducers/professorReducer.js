

const initState = {
    professors: [
        {key: 'value'}
    ]
};

const professorReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            console.log('Creating project...', action.project);
            return state;
        case 'UPDATE_DATA_ERR':
            console.log('Project error...', action.err);
            return state;
        default:
            return state;
    }
};

export default professorReducer;