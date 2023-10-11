"use client"
import { useRouterState } from "../context"

export default function Page() {
    const {
        state
    } = useRouterState()

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                Current state value
            </div>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </main>
    );
}