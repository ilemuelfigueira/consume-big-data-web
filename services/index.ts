import { parseNDJSON } from "@/util";

const API_URL = process.env.API_URL || "http://localhost:3005";

export async function getMovieListStream(signal: AbortSignal) {
  const response = await fetch(`${API_URL}`, {
    signal,
  });

  if (response.body) {
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(parseNDJSON());
    return reader;
  }

  throw new Error("no response");
}
