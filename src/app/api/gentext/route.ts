import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { inputs } = await req.json();

  try {
    const response = await fetch(process.env.HUGGING_FACE_MODEL as string, {
      headers: { Authorization: process.env.HUGGING_FACE_KEY as string },
      method: "POST",
      body: JSON.stringify({
        inputs,
      }),
    });
    const result = await response.json();

    if(result.error) {
      return NextResponse.json({
        ok: false,
        error: result.error,
      });
    }

    return NextResponse.json({
      ok: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      error,
    });
  }
};
