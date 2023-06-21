export function parseNDJSON() {
  let ndjsonbuffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      ndjsonbuffer += chunk;
      const lines = ndjsonbuffer.split("\n");
      for (const line of lines.slice(0, -1)) {
        controller.enqueue(JSON.parse(line));
      }
      ndjsonbuffer = lines[lines.length - 1];
    },
    flush(controller) {
      if (!ndjsonbuffer) return;

      controller.enqueue(JSON.parse(ndjsonbuffer));
    },
  });
}