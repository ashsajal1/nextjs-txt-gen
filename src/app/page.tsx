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

    if (!inputs) {
      setError("The input filed cannot be empty");
      return
    }
    setLoading(true)
    if(error) {
      setError('')
    }
    // console.log(inputs)
    try {
      const data = await fetch("/api/gentext", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inputs
        })
      })

      const response = await data.json();
      // console.log(response)

      if (!response.ok) {
        setLoading(false)
        setError("An Error occurred.")
        // console.log(response.error)
        return;
      }

      setLoading(false)
      // console.log(response.result[0].generated_text)
      setInputs(response.result[0].generated_text)
    } catch (error) {
      setError("An Error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-6 gap-4">
      <Input inputs={inputs} loading={loading} handleInputChange={handleInputChange} />
      <Button handleSubmit={handleSubmit} loading={loading} />

      {error && (
        <Error error={error} />
      )}
    </main>
  )
}
