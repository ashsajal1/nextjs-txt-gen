import React, { ChangeEvent } from 'react'

interface InputProps {
    loading: boolean,
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Input({ loading, handleInputChange }: InputProps) {
    return (
        <textarea disabled={loading} onChange={handleInputChange} className="w-full h-[200px] border p-2 rounded outline-none text-sm focus:ring-1 focus:ring-violet-600 transition-all duration-300" placeholder="Enter text"></textarea>
    )
}
