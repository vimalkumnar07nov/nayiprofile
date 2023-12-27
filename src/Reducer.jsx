const reducer = (state, action) => {

    // Home page Update code............
    if (action.type === 'HOME_UPDATE') {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            desc: action.payload.desc,
        };
    };
    // About page Update code..........

    if (action.type === 'ABOUT_UPDATE') {
        return {
            ...state,
            name: action.payload.name,
            image: action.payload.image,
            
        };
    };

    // if (action.type === 'MYBIO_UPDATE') {
    //     return {
    //         ...state,
    //         name: action.payload.name,
    //         image: action.payload.image,
    //     };
    // };

    return state;
};
export default reducer;