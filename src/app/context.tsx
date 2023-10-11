'use client'

import React, { PropsWithChildren, useState } from 'react';

interface RouterContextType {
    state: Record<string, unknown>;
    setState: (state: Record<string, unknown>) => void;
}

const RouterContext = React.createContext<RouterContextType>({
    state: {},
    setState: () => {},
});

export function RouterContextProvider({
    children
}: PropsWithChildren<{}>) {
    const [state, setState] = useState({});

    return (
        <RouterContext.Provider value={{
            state: state,
            setState: setState,
        }}>
            {children}
        </RouterContext.Provider>
    )
}

export function useRouterState() {
    const context = React.useContext(RouterContext);
    if (context === undefined) {
        throw new Error('useRouterState must be used within a RouterContextProvider');
    }
    return context;
}

export default RouterContext;
