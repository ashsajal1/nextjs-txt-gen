'use client';
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import { ChangeEvent, useState } from "react"

export default function Home() {
  const [inputs, setInputs] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs(e.target.value)
    // console.log(e.target.value)
  };

  const handleSubmit = async () => {
    console.log("first")
  }

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <Input loading={loading} handleInputChange={handleInputChange} />
      <Button handleSubmit={handleSubmit} loading={loading} />

      {error && (
        <Error error={error} />
      )}
    </main>
  )
}
