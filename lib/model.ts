import { createOpenAICompatible } from "@ai-sdk/openai-compatible"

// The self-hosted LiteLLM gateway. Read up front so a misconfigured deploy
// fails on boot rather than part-way through someone's first message.
const baseURL = process.env.LLM_GATEWAY_BASE_URL
const apiKey = process.env.LLM_GATEWAY_API_KEY

if (!baseURL || !apiKey) {
  throw new Error(
    "The chat model needs LLM_GATEWAY_BASE_URL and LLM_GATEWAY_API_KEY"
  )
}

const gateway = createOpenAICompatible({
  name: "llmgateway",
  baseURL,
  apiKey,
  // The screen tools answer with the picture itself. Without this the whole
  // tool result is stringified and the model is handed base64 as prose.
  supportsMultiPartToolContent: true,
  // Ask for the token counts on the last chunk of a stream, or a turn's usage
  // comes back empty and bills nothing.
  includeUsage: true,
})

// The model the chat agent talks to. The gateway drops down to its stable tier
// on its own if the preview model fails, so there is nothing to retry here.
export function chatModel() {
  return gateway("gemini-flash")
}
