'use client';
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import { ChangeEvent, useState } from "react"

export default function Home() {
  const [inputs, setInputs] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('ffdas');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs(e.target.value)
    console.log(e.target.value)
  }
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
     <Input loading={loading} handleInputChange={handleInputChange} />
      <Button loading={loading} />

      {/* {loading && (
        <div className="animate-pulse p-2 bg-violet-300">Loading ...</div>
      )} */}

      {error && (
        <Error error={error} />
      )}
    </main>
  )
}
