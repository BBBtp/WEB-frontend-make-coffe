import { createContext, useContext, useReducer } from "react";

export const SEARCH_ACTIONS = {
    SET_QUERY: "SET_QUERY",
    SET_RESULTS: "SET_RESULTS",
    SET_ERROR: "SET_ERROR",
};

const searchReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_ACTIONS.SET_QUERY:
            return { ...state, query: action.payload };
        case SEARCH_ACTIONS.SET_RESULTS:
            return { ...state, results: action.payload, error: null };
        case SEARCH_ACTIONS.SET_ERROR:
            return { ...state, error: action.payload };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

const initialState = {
    query: "", // Поисковый запрос
    results: [], // Результаты поиска
    error: null, // Ошибки
};

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    return (
        <SearchContext.Provider value={{ state, dispatch, SEARCH_ACTIONS }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
