import { useContext, useReducer } from "react";
import React from "react";
import reducer from "./Reducer";

// creat context
// provider
// consummer / usecontext

const AppContext = React.createContext();

const initialState = {
    name: '',
    image: '',
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHome = () => {
        return dispatch(
            {
                type: 'HOME_UPDATE',
                payload: {
                    name: 'Rashmi kumari',
                    image: './images/rashmikr.jpeg',
                    desc : 'A Small STEP to make your IDENTITY.',
                }
            },
        );
    };

    const updateAbout = () => {
        return dispatch(
            {
                type: 'ABOUT_UPDATE',
                payload: {
                    name: 'WELCOME TO नई पहचान',
                    image: './images/aboutus.svg',
                    desc : 'A Small STEP to make your IDENTITY.',
                }
            },
        );
    };

    // const updateMybio = () => {
    //     return dispatch(
    //         {
    //             type: 'MYBIO_UPDATE',
    //             payload: {
    //                 name: 'This is my bio Page',
    //                 image: './images/logo.png',
    //             }
    //         },
    //     );
    // };

    return <AppContext.Provider value={{ ...state, updateHome, updateAbout}}>{children}</AppContext.Provider>
};

// global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };