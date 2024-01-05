'use client';
import Button from "@/components/Button";
import Error from "@/components/Error";
import Input from "@/components/Input";
import { ChangeEvent, useEffect, useState } from "react"

export default function Home() {
  const [inputs, setInputs] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInput, setHasInput] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (hasInput) {
      handleSubmit()
      setHasInput(false)
    }
  }, [inputs])

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs(e.target.value)
    // console.log(e.target.value)
  };

  const handleSample = () => {
    setHasInput(true)
    setInputs("Science is all about")
  }

  const handleSubmit = async () => {

    if (!inputs) {
      setError("The input field cannot be empty");
      return
    }
    setLoading(true)
    if (error) {
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
        setError("An error occurred.")
        // console.log(response.error)
        return;
      }

      setLoading(false)
      // console.log(response.result[0].generated_text)
      setInputs(response.result[0].generated_text)
    } catch (error) {
      setError("An error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-6 gap-4">
      <Input inputs={inputs} loading={loading} handleInputChange={handleInputChange} />

      <div className="flex flex-col md:flex-row w-full gap-2">
        <Button handleSubmit={handleSubmit} loading={loading} />
        <button disabled={loading} onClick={handleSample} className="p-2 rounded border border-violet-600 w-full text-violet-600 hover:text-violet-800 hover:border-violet-800">See example</button>
      </div>

      {error && (
        <Error error={error} />
      )}
    </main>
  )
}
