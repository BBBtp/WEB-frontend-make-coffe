import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

// Типы для действий
export interface SearchAction {
    type: string;
    payload?: any;
}

// Типы для состояния
export interface SearchState {
    query: string; // Поисковый запрос
    results: any[]; // Результаты поиска
    error: string | null; // Ошибки
}

// Константы действий
export const SEARCH_ACTIONS = {
    SET_QUERY: "SET_QUERY",
    SET_RESULTS: "SET_RESULTS",
    SET_ERROR: "SET_ERROR",
};

// Редьюсер
const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
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

// Начальное состояние
const initialState: SearchState = {
    query: "", // Поисковый запрос
    results: [], // Результаты поиска
    error: null, // Ошибки
};

// Контекст
interface SearchContextProps {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
    SEARCH_ACTIONS: typeof SEARCH_ACTIONS;
}

// Передаём начальное значение для контекста (заглушка для TypeScript)
const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps): JSX.Element => {
    const [state, dispatch] = useReducer(searchReducer, initialState);

    return (
        <SearchContext.Provider value={{ state, dispatch, SEARCH_ACTIONS }}>
            {children}
        </SearchContext.Provider>
    );
};

// Хук для использования контекста
export const useSearch = (): SearchContextProps => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
