"use client";
import Link from 'next/link';
import { useRouterState } from './context';

export default function Home() {
  const { setState, state } = useRouterState();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <input
        id="input-field"
        type="text"
        onChange={(e) => {
          setState({
            text: e.target.value,
          })
        }}
        value={state.text || ''}
        className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text here"
      />
      <div>
        Current state value
      </div>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <Link
        href="/another"
        className='border rounded p-3 hover:bg-gray-900 transition-colors mt-6'
      >
        To another page
      </Link>
    </main>
  )
}
