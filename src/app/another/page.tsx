import StateValue from "./state-value";

export default async function Page() {
    // await promise for 1000ms
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                Current state value
            </div>
            <StateValue />
        </main>
    );
}