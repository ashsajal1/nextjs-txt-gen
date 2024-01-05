import React from 'react'
import ErrorIcon from './ErrorIcon'

export default function Error({error}:{error:string}) {
    return (
        <div className="bg-red-100 p-2 w-full text-red-600 rounded text-sm flex items-center gap-2">
            <ErrorIcon />
            <span>{error}</span>
        </div>
    )
}
