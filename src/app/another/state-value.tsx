"use client"

import { useRouterState } from "../context"

export default function StateValue() {
    const {
        state
    } = useRouterState();

    return (
        <pre>
            {JSON.stringify(state, null, 2)}
        </pre>
    );
}