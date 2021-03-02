import React, {createContext, useReducer, useContext} from "react"
//Default state

const defaultState = {
    currentTheme: "",
    fetchedImages: [],
    isLoading: false,
    error: null
}

//Define Conext
const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME": {
            return {
                ...state,
                currentTheme: action.theme,
            }
        }
        case 'IMAGE_LOADED': {
            return {
                ...state,
                fetchedImages: action.loadedImages,
                isLoading: false,
                error: null
            }
        }
        case 'IMAGE_LOADING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'ERROR_LOADING': {
            return {
                ...state,
                error: action.error
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

//Provider

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: 'light',
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
