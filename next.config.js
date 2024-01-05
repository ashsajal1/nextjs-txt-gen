/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUGGING_FACE_KEY: "Bearer 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",
    HUGGING_FACE_MODEL: "https://api-inference.huggingface.co/models/gpt2",
  },
};

module.exports = nextConfig;
