import React, { ChangeEvent } from 'react'

interface InputProps {
    inputs:string,
    loading: boolean,
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Input({inputs, loading, handleInputChange }: InputProps) {
    return (
        <textarea value={inputs} disabled={loading} onChange={handleInputChange} className="w-full h-[200px] border p-2 rounded outline-none text-sm focus:ring-1 focus:ring-violet-600 transition-all duration-300 text-violet-600" placeholder="Enter text">
        </textarea>
    )
}
