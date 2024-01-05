import React from 'react'
import GenerateIcon from './GenerateIcon'

export default function Button({loading} : {loading: boolean}) {
    return (
        <button disabled={loading} className={`bg-violet-600 p-2 rounded w-full text-slate-50 flex items-center justify-center gap-2 hover:bg-violet-700 transition-all duration-300 cursor-pointer text-sm disabled:bg-violet-400 ${loading ? "animate-pulse" : ""}`}>
            <GenerateIcon />
            <span>{loading ? "Generating" : "Generate"}</span>
        </button>
    )
}
