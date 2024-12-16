import { ReactNode, Dispatch } from "react";
export interface SearchAction {
    type: string;
    payload?: any;
}
export interface SearchState {
    query: string;
    results: any[];
    error: string | null;
}
export declare const SEARCH_ACTIONS: {
    SET_QUERY: string;
    SET_RESULTS: string;
    SET_ERROR: string;
};
interface SearchContextProps {
    state: SearchState;
    dispatch: Dispatch<SearchAction>;
    SEARCH_ACTIONS: typeof SEARCH_ACTIONS;
}
interface SearchProviderProps {
    children: ReactNode;
}
export declare const SearchProvider: ({ children }: SearchProviderProps) => JSX.Element;
export declare const useSearch: () => SearchContextProps;
export {};
//# sourceMappingURL=SearchContext.d.ts.map