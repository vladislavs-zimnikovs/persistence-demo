"use client"

import { useRouterState } from "../context";
import StateValue from "./state-value";

export default function Loading() {
    const {
        state
    } = useRouterState();

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                Client side loading
            </div>
            <div>
                Current state value
            </div>
            <StateValue />
        </main>
    );
}